import mongoose from "mongoose";

const foodSchema = new mongoose.Schema(
  {
    donor: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    foodName: { type: String, required: true },
    quantity: { type: Number, required: true },
    expiryTime: { type: Date, required: true },
    location: { type: String, required: true },
    status: {
      type: String,
      enum: ["available", "claimed", "collected"],
      default: "available",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Food", foodSchema);
