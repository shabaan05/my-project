import express from "express";
import { addFood, getAvailableFood, updateFoodStatus } from "../controllers/foodController.js";
// import { authMiddleware } from "../utils/authMiddleware.js"; // verify JWT
import { authMiddleware } from "../middleware/authMiddleware.js";

const router1 = express.Router();

// Donor adds food
router1.post("/add", authMiddleware, addFood);

// NGOs or public can see available food
router1.get("/list", getAvailableFood);

// Update status (claimed / collected) — NGO or Donor can call this
router1.patch("/status/:id", authMiddleware, updateFoodStatus);

export default router1;
