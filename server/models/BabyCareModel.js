import mongoose from "mongoose";

const babyCareSchema = new mongoose.Schema({
  name: String,
  age: Number, // Age of the caretaker
  gender: String, // "Male" | "Female" | "Other"
  experienceInYears: Number,
  specialist:String ,
  rating: Number, // 1 to 5
  chargesPerHour: Number,
  availableTimings: [String],
  location: String,
  isAvailable: {
    type: Boolean,
    default: true
  }
});

export const BabyCaremodel = mongoose.model("BabyCaremodel", babyCareSchema);
