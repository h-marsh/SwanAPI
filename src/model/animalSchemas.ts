import mongoose, { Document, Schema } from "mongoose";
import { Dog, Cat, Fish, Bird, Rodent } from "./animalInterfaces.js";

const dogSchema = new mongoose.Schema<Dog>({
  id: { type: Number, required: true, unique: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female"] },
  coatType: { type: String, enum: ["short", "long"], required: true },
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
export const DogModel = mongoose.model<Dog & Document>("dogs", dogSchema);

const catSchema = new Schema<Cat>({
  _id: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female"] },
  coatType: { type: String, enum: ["short", "long"], required: true },
  color: { type: String, required: true },
  habitat: { type: String },
  diet: { type: String, required: true },
  size: {
    type: String,
    enum: ["small", "medium", "large"],
    required: true,
  },
});

export const CatModel = mongoose.model<Cat & Document>("Cat", catSchema);

const birdSchema = new Schema<Bird>({
  _id: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female"] },
  color: { type: String, required: true },
  habitat: { type: String },
  diet: { type: String, required: true },
  size: {
    type: String,
    enum: ["small", "medium", "large"],
    required: true,
  },
});

export const BirdModel = mongoose.model<Bird & Document>("Bird", birdSchema);

const fishSchema = new Schema<Fish>({
  _id: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  color: { type: String, required: true },
  habitat: { type: String },
  diet: { type: String, required: true },
  size: {
    type: String,
    enum: ["small", "medium", "large"],
    required: true,
  },
});

export const FishModel = mongoose.model<Fish & Document>("Fish", fishSchema);

const rodentSchema = new Schema<Rodent>({
  _id: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ["male", "female"] },
  color: { type: String, required: true },
  habitat: { type: String },
  diet: { type: String, required: true },
  size: {
    type: String,
    enum: ["small", "medium", "large"],
    required: true,
  },
});

export const RodentModel = mongoose.model<Rodent & Document>(
  "Rodent",
  rodentSchema
);
