import express from "express"
import dotenv from "dotenv"
import { connectdb } from "./src/Utils/db.js"
import route from "./src/Routes/user.routes.js"


dotenv.config()

const app = express()
app.use(express.json())
app.use("/users", route)

connectdb()


const PORT = process.env.PORT || 5000


app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})