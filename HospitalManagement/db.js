import mongoose from "mongoose";

 export const connectDB = async(req, res) =>{
    try {
        await mongoose.connect("MONGO_URI")
        console.log("mongo db connected")
        
    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }
    

}