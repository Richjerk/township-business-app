const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
dotenv.config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

async function testConnection() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const db = client.db('township_directory');
    console.log('Database:', db.databaseName);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  } finally {
    await client.close();
  }
}

testConnection();
