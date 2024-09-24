// src/lib/db.js
import { MongoClient } from 'mongodb';

// Replace with your actual MongoDB connection string
const uri = "mongodb://atlas-sql-65edfbe73d7aff59625ae3b6-3q47b.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin"; 
const client = new MongoClient(uri);

let database;

async function connectToDatabase() {
  if (!database) {
    await client.connect(); // Connect to MongoDB
    database = client.db("township_directory"); // Replace with your database name
  }
  return database;
}

export const getDatabase = connectToDatabase;
export const businesses = database ? database.collection("businesses") : null; // Collection reference
export const users = database ? database.collection("users") : null; // Collection reference

