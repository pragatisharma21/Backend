import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type: String, required: true},
    email:{type: String, required: true, unique:true},
    password:{type: String},
    age:{type:Number, min:18, max:100, default:18},
    gender:{type:String, enum:["male", "female", "bias", "lesbian", "gay", "transgender"], default:"male"} 
    
})
 

const User = mongoose.model("User", userSchema)
export default User;