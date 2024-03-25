export type Rodent = {
  age: number;
  gender?: "male" | "female";
  color: string;
  habitat?: string;
  diet: string;
  size: "small" | "medium" | "large";
};

export type Hamster = Rodent & {
  breed: "Hamster";
  temperament: string;
  activityLevel: string;
  lifespan: string;
};

export type Gerbil = Rodent & {
  breed: "Gerbil";
  temperament: string;
  activityLevel: string;
  lifespan: string;
};

export type GuineaPig = Rodent & {
  breed: "Guinea Pig";
  temperament: string;
  socialNeeds: string;
  lifespan: string;
};
