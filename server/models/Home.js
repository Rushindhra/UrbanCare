import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
  name: String,
  category: String, // "Cooking", "Cleaning", etc.
  specialist: String, // e.g., "South Indian Cook", "North Indian Cook"
  rating: Number, // 1 to 5
  chargesPerHour: Number,
  availableTimings: [String],
  location: String,
  isAvailable: {
    type: Boolean,
    default: true
  }
});

export const Homemodel = mongoose.model("Homemodel", homeSchema);


