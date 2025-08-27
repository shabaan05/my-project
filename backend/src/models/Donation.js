import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    food: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
      required: true,
    },
    ngo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // NGO is also a user with role: "ngo"
    },
    status: {
      type: String,
      enum: ["available", "claimed", "delivered"],
      default: "available",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Donation", donationSchema);
