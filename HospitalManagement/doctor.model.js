import mongoose, { mongo } from "mongoose"

const doctorSchema = new mongoose.Schema({
    name : {type : STring , required : true},
    salary : {type : String, required : true},
    qualification : {type : String, required: true},
    experienceInYears : {type : Number , default : 0},
    worksInHospitals : [{type : mongoose.Schema.Types.ObjectId, ref : "Hospital"}]

    
}, {timestamps: true})



 export const Doctor = mongoose.model("Doctor", doctorSchema)