import mongoose from "mongoose";

export const connection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo db is connected")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
        
    }

}