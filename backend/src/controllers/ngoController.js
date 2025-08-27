import Donation from "../models/Donation.js";
import Food from "../models/Food.js";

// Fetch all available food donations
export const getAvailableDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ status: "available" })
      .populate("food")
      .populate("donor", "name email");
    res.json(donations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// NGO claims a donation
export const claimDonation = async (req, res) => {
  try {
    const { donationId } = req.params;
    const ngoId = req.user.id; // from JWT middleware

    const donation = await Donation.findById(donationId);
    if (!donation || donation.status !== "available") {
      return res.status(400).json({ message: "Donation not available" });
    }

    donation.ngo = ngoId;
    donation.status = "claimed";
    await donation.save();

    res.json({ message: "Donation claimed successfully", donation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Mark donation as delivered
export const markAsDelivered = async (req, res) => {
  try {
    const { donationId } = req.params;

    const donation = await Donation.findById(donationId);
    if (!donation || donation.status !== "claimed") {
      return res.status(400).json({ message: "Cannot mark this donation as delivered" });
    }

    donation.status = "delivered";
    await donation.save();

    res.json({ message: "Donation marked as delivered", donation });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
