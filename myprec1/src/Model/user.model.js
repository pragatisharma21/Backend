import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name : {type: String},
    email : {type: String, required: true},
    password : {type: String, required : true},
    age : {type: Number, default : 19},
    gender : {type : String, default : "None"}
})


const userTable = mongoose.model("userTable", userSchema)
export default userTable