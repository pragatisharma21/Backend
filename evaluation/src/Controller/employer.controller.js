import { Employer } from "../Model/employer.model.js";
import bcrypt from "bcryptjs";

export const createEmployer = async (req, res) => {
  try {
    const { email, password } = req.body;

    const isExistingUser = await Employer.findOne({ email });

    if (isExistingUser) {
      return res.status(400).json({ message: "Employer already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const employer = new Employer({ ...req.body, password: hashedPassword });
    await employer.save();
    res.status(201).json({ message: "Employer created sucessfully", data: employer });
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

export const getEmployer = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.id);

    if (!employer) {
      return res.status(404).json({ message: "No Employer found" });
    }

    res.status(200).json({data: employer})
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
};

export const updateEmployer = async(req, res)=>{
  try {
    const employer = await Employer.findByIdAndUpdate(req.params.id, req.body, {new: true});

    if(!employer){
      return res.status(404).json({message: "Employer not found"})
    }

    res.status(200).json({message: "Employer updated Successfully", data: employer})
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
}

export const deleteEmployer = async(req, res)=>{
  try {
    const employer = await Employer.findByIdAndDelete(req.params.id);

    if(!employer){
      return res.status(404).json({message: "Employer not found"})
    }

    res.status(200).json({message: "Employer deleted Successfully", data: employer})
  } catch (error) {
    res.status(500).json({ message: "server error", error });
  }
}
