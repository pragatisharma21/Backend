import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type : String, required: true},
    location : {type: String},
    salary: {type: Number},
    skills: {type: [String]},
    employerId: {type: mongoose.Schema.Types.ObjectId, ref:"Employer", required: true}

}, {timestamps: true})

export const Job = mongoose.model("Job", jobSchema);