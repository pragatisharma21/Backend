import { Job } from "../Model/job.model.js";


export const createJob = async(req, res)=>{
   
    try {

        const {title, description, employerId} = req.body;

        if(!title || !description || !employerId){
            return res.status(400).json({message: "title and description required"})
        }

        const job = new Job({title, description, employerId: parseInt(employerId), ...req.body});

        await job.save();

        res.status(201).josn({message: "Job created successfully", data: job})
    } catch (error) {
        res.status(500).json({ message: "server error", error });
    }
}

export const getJob = async(req, res)=>{
    try {
        const job = await Job.findById(req.params.id);

        if(!job){
            return res.status(404).json({message: "Job not found"})
        }

        res.status(200).json(job)
    } catch (error) {
        res.status(500).json({ message: "server error", error });
    }
}


export const updateJob = async(req, res)=>{
    try {
        const job = await Job.findByIdAndUpdate(req.params.id, ...req.body, {new: true});

        if(!job){
            return res.status(404).json({message: "Job not found"})
        }

        res.status(200).json({message: "Job updated Successfully!", data: job})
    } catch (error) {
        res.status(500).json({ message: "server error", error });
    }
}

export const deleteJob = async(req, res)=>{
    try {
        const job = await Job.findByIdAndDelete(req.params.id);

        if(!job){
            return res.status(404).json({message: "Job not found"})
        }

        res.status(200).json({message: "Job deleted Successfully!", data: job})
    } catch (error) {
        res.status(500).json({ message: "server error", error });
    }
}