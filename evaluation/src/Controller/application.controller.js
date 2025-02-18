import { Application } from "../Model/application.model.js";

export const postApplication = async (req, res) => {
  try {
    const { jobId, jobSeekerId } = req.body;

    if (!jobId || !jobSeekerId) {
      return res
        .status(400)
        .json({ message: "Job Id and Seeker Id is required" });
    }

    const application = new Application({ jobId, jobSeekerId, ...req.body });
    await application.save();

    res
      .status(201)
      .json({ message: "Application created Successfully", data: application });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

export const geetApplicationBySeekerId = async (req, res) => {
  try {
    const application = await Application.findOne({
      jobSeekerId: req.params.id,
    });

    if (!application) {
      return res.status(404).json({ message: "No Applicationfound" });
    }

    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

export const geetApplicationByjobId = async (req, res) => {
  try {
    const application = await Application.findOne({ jobId: req.params.id });

    if (!application) {
      return res.status(404).json({ message: "No Applicationfound" });
    }

    res.status(200).json(application);
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

export const getAnalytics = async (req, res) => {
  try {
    const mostAppliedJobs = await Application.aggregate([
      {
        $group: {
          _id: "$jobId",
          applicationCount: { $sum: 1 },
        },
      },
      {
        $sort: { applicationCount: -1 },
      },
      {
        $limit: 10,
      },
      {
        $lookup: {
          from: "jobs",
          localField: "_id",
          foreignField: "_id",
          as: "jobDetails",
        },
      },
      {
        $unwind: "$jobDetails",
      },
      {
        $project: {
          _id: 0,
          jobId: "$jobDetails._id",
          title: "$jobDetails.title",
          applicationCount: 1,
        },
      },
    ]);

    const jobSeekerInsights = await Application.aggregate([
      {
        $group: {
          _id: "$jobSeekerId",
          applicationCount: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "seekers",
          localField: "_id",
          foreignField: "_id",
          as: "seekerDetails",
        },
      },
      {
        $unwind: "$seekerDetails",
      },
      {
        $project: {
          _id: 0,
          seekerId: "$seekerDetails._id",
          name: "$seekerDetails.name",
          applicationCount: 1,
        },
      },
    ]);

    return res.status(200).json({
      success: true,
      mostAppliedJobs,
      jobSeekerInsights,
    });
  } catch (error) {
    console.error("Error fetching analytics:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
