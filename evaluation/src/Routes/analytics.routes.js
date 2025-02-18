import express from "express";
import { getAnalytics } from "../Controller/application.controller.js";

const router = express.Router()

router.get("/getAnalytics", getAnalytics)

export default router