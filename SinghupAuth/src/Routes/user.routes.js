import express from "express"
import { signup } from "../Controllers/user.controller.js";

const router = express.Router()


router.post("/signup", signup)





export default router;