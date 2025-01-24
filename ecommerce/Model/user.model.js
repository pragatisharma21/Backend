import mongooose from "mongoose"


const userSchema = new mongooose.Schema({
    username : {
        type: String, required : true, unique : true, lowercase : true
    },
    email : {
        type : String , required : true, unique : true, lowercase : true
    }, 
    password : {
        type : String , required : true 
    }

},{timestamps: true})

 export const User = mongooose.model("User", userSchema)