import mongoose from "mongoose"


export const connectdb = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MONGO DB IS CONNECTED")
    } catch (error) {
        console.log(error.message)
        process.exit(1)
        
    }
}