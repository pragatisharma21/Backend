import express from "express";
import {
  geetApplicationByjobId,
  geetApplicationBySeekerId,
  postApplication,
} from "../Controller/application.controller.js";

const router = express.Router();

router.post("/application", postApplication);
router.get("/application/:jobSeekerId", geetApplicationBySeekerId);
router.get("/application/:JobId", geetApplicationByjobId);

export default router;
