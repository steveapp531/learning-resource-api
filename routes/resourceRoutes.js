import express from "express";
import {
  addResource,
  getResources,
  deleteResource,
} from "../controller/resourceController.js";
import { authenticateUser } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authenticateUser, addResource);
router.get("/", authenticateUser, getResources);
router.delete("/:id", authenticateUser, deleteResource);

export default router;
