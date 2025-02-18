import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()


const connectDbb = async() =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo Db is connected")
    } catch (error) {
        console.log("Mongo db is not connected")
        process.exit(1)
    }
}
export default connectDbb;