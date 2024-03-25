export type Bird = {
  age: number;
  color: string;
  habitat: string;
  diet: string;
  size: "small" | "medium" | "large";
};

export type Parrot = Bird & {
  breed: "Parrot";
  temperament: string;
  talkative: boolean;
  lifespan: string;
};

export type Finch = Bird & {
  breed: "Finch";
  temperament: string;
  colorVariety: string;
  lifespan: string;
};

export type Cockatiel = Bird & {
  breed: "Cockatiel";
  temperament: string;
  crestType: "upright" | "drooped";
  lifespan: string;
};
