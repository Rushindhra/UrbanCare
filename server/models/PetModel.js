import mongoose from "mongoose";

const petCareSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String, // "Male" | "Female" | "Other"
  experienceInYears: Number,

  specialist: String, // e.g., "Pet Grooming", "Feeding", "Walking"
  petTypesHandled: String, 

  rating: Number, // 1 to 5
  chargesPerHour: Number,
  availableTimings: [String],
  location: String,

  isAvailable: {
    type: Boolean,
    default: true
  }
});

export const PetCaremodel = mongoose.model("PetCaremodel", petCareSchema);
