import { Document } from "mongoose";

export interface AnimalDocument extends Document {
  name: string;
  age: number;
  species: string;
}

// DOG

export interface Dog extends Document {
  age: number;
  gender?: "male" | "female";
  coatType: string;
  color: string;
  habitat?: string;
  diet: string;
  size: "small" | "medium" | "large" | "extra-large";
}

export interface Poodle extends Dog {
  breed: "Poodle";
  coatType: "curly" | "wavy" | "corded";
  size: "medium";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
}

export interface Labrador extends Dog {
  breed: "Labrador";
  coatType: "short" | "medium";
  size: "medium" | "large";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
}

export interface Mastiff extends Dog {
  breed: "Mastiff";
  coatType: "short" | "medium";
  size: "large" | "extra-large";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
}

// CAT

export interface Cat extends Document {
  age: number;
  gender?: "male" | "female";
  color: string;
  habitat?: string;
  diet: string;
  size: "small" | "medium" | "large";
}

export interface Persian extends Cat {
  breed: "Persian";
  coatType: "long";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
}

export interface Ragdoll extends Cat {
  breed: "Ragdoll";
  coatType: "long";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
}

export interface Abyssinian extends Cat {
  breed: "Abyssinian";
  coatType: "short";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
}

// BIRD

export interface Bird extends Document {
  age: number;
  color: string;
  habitat: string;
  diet: string;
  size: "small" | "medium" | "large";
}

export interface Parrot extends Bird {
  breed: "Parrot";
  temperament: string;
  talkative: boolean;
  lifespan: string;
}

export interface Finch extends Bird {
  breed: "Finch";
  temperament: string;
  colorVariety: string;
  lifespan: string;
}

export interface Cockatiel extends Bird {
  breed: "Cockatiel";
  temperament: string;
  crestType: "upright" | "drooped";
  lifespan: string;
}

// FISH

interface Fish extends Document {
  age: number;
  color: string;
  habitat: string;
  diet: string;
  size: "small" | "medium" | "large";
}

interface Goldfish extends Fish {
  breed: "Goldfish";
  waterType: "freshwater";
  lifespan: string;
}

interface BettaFish extends Fish {
  breed: "Betta Fish";
  waterType: "freshwater";
  lifespan: string;
}

// RODENT

export interface Rodent extends Document {
  age: number;
  gender?: "male" | "female";
  color: string;
  habitat?: string;
  diet: string;
  size: "small" | "medium" | "large";
}

export interface Hamster extends Rodent {
  breed: "Hamster";
  temperament: string;
  activityLevel: string;
  lifespan: string;
}

export interface Gerbil extends Rodent {
  breed: "Gerbil";
  temperament: string;
  activityLevel: string;
  lifespan: string;
}

export interface GuineaPig extends Rodent {
  breed: "Guinea Pig";
  temperament: string;
  socialNeeds: string;
  lifespan: string;
}
