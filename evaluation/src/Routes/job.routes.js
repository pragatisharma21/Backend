import express from "express";
import { createJob, deleteJob, getJob, updateJob } from "../Controller/job.controller.js";

const router = express.Router();

router.post("/job", createJob);
router.get("/job/:id", getJob);
router.put("/job/:id", updateJob);
router.delete("/job/:id", deleteJob);


export default router