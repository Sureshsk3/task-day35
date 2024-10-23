import { Router } from "express";
import studentRouter from "./studentRouter.js"
import mentorRouter from './mentorRouter.js'

const router = Router();
router.get("/", async (req, res) => {
  try {
    res.status(200).json({ message: "Welcome to Server Backend" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});
router.use("/student",studentRouter);
router.use("/mentor",mentorRouter);

export default router;
