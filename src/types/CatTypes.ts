export type Cat = {
  age: number;
  gender?: "male" | "female";
  coatType: "short" | "long";
  color: string;
  habitat?: string;
  diet: string;
  size: "small" | "medium" | "large";
};

export type Persian = Cat & {
  breed: "Persian";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
};

export type Ragdoll = Cat & {
  breed: "Ragdoll";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
};

export type Abyssinian = Cat & {
  breed: "Abyssinian";
  temperament: string;
  trainability: string;
  exerciseNeeds: string;
};
