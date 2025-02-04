import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    name : {
        type : String, required: true
    },
    email:{
        type: String, required: true, unique: true
    }, 
    password: {
        type: String, required:true
    }, 
    gender:{
        type:String, default: "women"
    }
},{timestamps:true})


const User = ("User", userSchema)
export default User;