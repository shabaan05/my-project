import express from "express";
import { getAvailableDonations, claimDonation, markAsDelivered } from "../controllers/ngoController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router2 = express.Router();

// NGO can see all available donations
router2.get("/donations", authMiddleware, getAvailableDonations);

// NGO can claim a donation
router2.put("/donations/:donationId/claim", authMiddleware, claimDonation);

// NGO marks donation as delivered
router2.put("/donations/:donationId/deliver", authMiddleware, markAsDelivered);

export default router2;
