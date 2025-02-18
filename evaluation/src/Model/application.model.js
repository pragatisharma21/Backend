import mongoose from "mongoose"


const applicationSchema = new mongoose.Schema({
    jobId : {type:mongoose.Schema.Types.ObjectId, ref:"Job", required:true},
    jobSeekerId : {type: mongoose.Schema.Types.ObjectId, ref:"Seeker", required : true},
    coverLetter:{type:String},
  

}, {timestamps: true})



export const Application = mongoose.model("Application", applicationSchema)