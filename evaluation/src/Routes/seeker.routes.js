import express from "express";
import {
  createJobSeeker,
  deleteJobSeekers,
  getJobSeekers,
  updateJobSeekers,
} from "../Controller/seeker.controller.js";

const router = express.Router();

router.post("/jobseekers", createJobSeeker);
router.get("/jobseekers/:id", getJobSeekers);
router.put("/jobseekers/:id", updateJobSeekers);
router.delete("/jobseekers/:id", deleteJobSeekers);

export default router;
