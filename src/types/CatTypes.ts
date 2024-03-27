export type Cat = {
  age: number;
  gender?: "male" | "female";
  coatType: "short" | "medium" | "long";
  color: string;
  habitat?: string;
  diet: string;
  size: "small" | "medium" | "large";
};

export type Persian = Cat & {
  breed: "Persian";
  coatType: "long";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
};

export type Ragdoll = Cat & {
  breed: "Ragdoll";
  coatType: "long";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
};

export type Abyssinian = Cat & {
  breed: "Abyssinian";
  coatType: "short";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
};
