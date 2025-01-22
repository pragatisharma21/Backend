import express, { Router } from "express"
import { signUUp } from "../Controller/user.controller.js"


const router = express.Router()

router.post("/signUUp" , signUUp)


export default router