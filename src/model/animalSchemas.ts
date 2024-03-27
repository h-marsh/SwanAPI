import mongoose, { Document, Schema } from "mongoose";
import { Dog, Cat, Fish, Bird, Rodent } from "./animalInterfaces.js";

const dogSchema = new Schema<Dog>({
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female"] },
  coatType: { type: String, required: true },
  color: { type: String, required: true },
  habitat: { type: String },
  diet: { type: String, required: true },
  size: {
    type: String,
    enum: ["small", "medium", "large", "extra-large"],
    required: true,
  },
});

// Create and export the Mongoose model based on the schema
export const DogModel = mongoose.model<Dog & Document>("Dog", dogSchema);

const catSchema = new Schema<Cat>({
  age: {},
});
