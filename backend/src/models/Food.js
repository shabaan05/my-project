import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  donorId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  quantity: Number,
  expiry: Date,
  imageUrl: String,
  location: {
    lat: Number,
    lng: Number,
    address: String
  },
  status: { type: String, enum: ["available", "claimed", "expired"], default: "available" }
}, { timestamps: true });

export default mongoose.model("Food", foodSchema);
