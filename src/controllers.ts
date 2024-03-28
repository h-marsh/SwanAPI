import { Request, Response } from "express";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

import {
  BirdModel,
  CatModel,
  DogModel,
  FishModel,
  RodentModel,
} from "./model/animalSchemas.js";

dotenv.config({ path: "./config.env" });

const url = process.env.DATABASE;
const dbName = "Animals";

const client = new MongoClient(url);

export async function getAllAnimals() {
  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("Animals");

    // Query the collection to retrieve all records
    const cursor = collection.find({});

    // Convert the cursor to an array of documents
    const animals = await cursor.toArray();

    return animals;
  } finally {
    await client.close();
  }
}

export const addNewAnimal = async (req: Request, res: Response) => {
  try {
    if (!req.body) {
      return res.status(400).json({ message: "Request body is missing" });
    }

    const { animalType, ...animalData } = req.body;

    let animalModel: any;

    switch (animalType) {
      case "dog":
        animalModel = DogModel;
        break;
      case "cat":
        animalModel = CatModel;
        break;
      case "fish":
        animalModel = FishModel;
        break;
      case "bird":
        animalModel = BirdModel;
        break;
      case "rodent":
        animalModel = RodentModel;
        break;

      default:
        return res.status(400).json({ message: "Invalid animal type" });
    }

    try {
      const newAnimal = await animalModel.create(animalData);
      return res
        .status(201)
        .json({ message: "Animal added successfully", animal: newAnimal });
    } catch (error) {
      console.error("Error creating animal:", error);
      // Handle error
    }
  } catch (error) {
    console.error("Error adding animal:", error);
    return res
      .status(500)
      .json({ message: "Failed to add animal", error: error.message });
  }
};
