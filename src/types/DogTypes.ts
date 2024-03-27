export type Dog = {
  age: number;
  gender?: "male" | "female";
  coatType: string;
  color: string;
  habitat?: string;
  diet: string;
  size: "small" | "medium" | "large" | "extra-large";
};

export type Poodle = Dog & {
  breed: "Poodle";
  coatType: "curly" | "wavy" | "corded";
  size: "medium";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
};

export type Labrador = Dog & {
  breed: "Labrador";
  coatType: "short" | "medium";
  size: "medium" | "large";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
};

export type Mastiff = Dog & {
  breed: "Mastiff";
  coatType: "short" | "medium";
  size: "large" | "extra-large";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
};
