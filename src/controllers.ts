import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });

const url = process.env.DATABASE;
const dbName = "animals";

const client = new MongoClient(url);

export async function getAllAnimals() {
  try {
    await client.connect();

    const db = client.db(dbName);
    const collection = db.collection("animals");

    // Query the collection to retrieve all records
    const cursor = collection.find({});

    // Convert the cursor to an array of documents
    const animals = await cursor.toArray();

    return animals;
  } finally {
    await client.close();
  }
}

export async function addNewAnimal() {
  try {
    await client.connect();
  } finally {
    await client.close();
  }
}
