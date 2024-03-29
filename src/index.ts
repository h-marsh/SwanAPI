import express, { Request, Response } from "express";

import { getAllAnimals, addNewAnimal } from "./controllers.js";

const app = express();

app.use(express.json());

app.get("/animals", async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    // const animals = await getAllAnimals();
    res.json(req.body);
  } catch (error) {
    console.error("Error retrieving animals:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/animals/:id", (req: Request, res: Response) => {
  // TODO
});

app.post("/animals", async (req: Request, res: Response) => {
  try {
    const animals = await addNewAnimal(req, res);
    res.json(animals);
  } catch (error) {
    console.error("Error retrieving animals:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.patch("/animals/:id", (req: Request, res: Response) => {});

app.delete("/animals/:id", (req: Request, res: Response) => {});

export default app;
