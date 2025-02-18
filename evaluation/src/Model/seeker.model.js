import mongoose from "mongoose"

const seekerSchema = new mongoose.Schema({
   name: {type : String, required: true, lowercase: true},
   email: {type: String, required: true, lowercase: true},
   password: {type: String, required: true},
   role: {type: String, default: "seeker"},
   skills: {type: [String]},
   location: {type: String},

}, {timestamps: true})

export const  Seeker = mongoose.model("Seeker", seekerSchema)