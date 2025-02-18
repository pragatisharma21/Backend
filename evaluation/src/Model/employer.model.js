import mongoose from "mongoose"

const employerSchema = new mongoose.Schema({
   name: {type : String, required: true, lowercase: true},
   email: {type: String, required: true, lowercase: true},
   password: {type: String, required: true},
   role: {type: String, default: "employer"},
   company: {type: String},
   location: {type: String},

}, {timestamps: true})

export const  Employer = mongoose.model("Employer", employerSchema)