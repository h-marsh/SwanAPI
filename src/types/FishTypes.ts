export type Fish = {
  age: number;
  color: string;
  habitat: string;
  diet: string;
  size: "small" | "medium" | "large";
};

export type Goldfish = Fish & {
  breed: "Goldfish";
  waterType: "freshwater";
  lifespan: string;
};

export type BettaFish = Fish & {
  breed: "Betta Fish";
  waterType: "freshwater";
  lifespan: string;
};
