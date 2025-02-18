import { Seeker } from "../Model/seeker.model.js";
import bcrypt from "bcryptjs";

export const createJobSeeker = async (req, res) => {
  try {
    const { password, email } = req.body;
    const isExistingUser = await Seeker.findOne({ email });

    if (isExistingUser) {
      return res.status(400).json({ message: "user already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new Seeker({ ...req.body, password: hashedPassword });
    await user.save()
    res.status(201).json({ message: "User created sucessfully", data: user });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

export const getJobSeekers = async (req, res) => {
  try {
    const jobSeekers = await Seeker.findById(req.params.id);

    if (!jobSeekers) {
      return res.status(404).json({ message: "No job seekers found" });
    }

    res.status(200).json({data: jobSeekers})
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

export const updateJobSeekers = async(req, res)=>{
  try {
    const user = await Seeker.findByIdAndUpdate(req.params.id, req.body, {new: true});

    if(!user){
      return res.status(404).json({message: "User not found"})
    }

    res.status(200).json({message: "User updated Successfully", data: user})
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
}

export const deleteJobSeekers = async(req, res)=>{
  try {
    const user = await Seeker.findByIdAndDelete(req.params.id);

    if(!user){
      return res.status(404).json({message: "User not found"})
    }

    res.status(200).json({message: "User deleted Successfully", data: user})
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
}
