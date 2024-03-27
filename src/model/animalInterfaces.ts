import { Document } from "mongoose";

export interface AnimalDocument extends Document {
  name: string;
  age: number;
  species: string;
}

export interface Dog extends Document {
  age: number;
  gender?: "male" | "female";
  coatType: string;
  color: string;
  habitat?: string;
  diet: string;
  size: "small" | "medium" | "large" | "extra-large";
}

export interface Cat extends Document {
  age: number;
  gender?: "male" | "female";
  color: string;
  habitat?: string;
  diet: string;
  size: "small" | "medium" | "large";
}

export interface Bird extends Document {
  age: number;
  color: string;
  habitat: string;
  diet: string;
  size: "small" | "medium" | "large";
}

export interface Fish extends Document {
  age: number;
  color: string;
  habitat: string;
  diet: string;
  size: "small" | "medium" | "large";
}

export interface Rodent extends Document {
  age: number;
  gender?: "male" | "female";
  color: string;
  habitat?: string;
  diet: string;
  size: "small" | "medium" | "large";
}
