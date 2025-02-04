import express from "express"
import { signup } from "../Controllers/user.controller.js";


const route = express.Router()


route.post("/signup", signup)





export default route;