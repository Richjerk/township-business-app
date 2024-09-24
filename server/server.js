// server/server.js
const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// MongoDB connection
const uri = process.env.MONGODB_URI; // Store your MongoDB URI in .env
const client = new MongoClient(uri);

// Run the application
async function run() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log('Connected to MongoDB');
    
    // Access the database and collection
    const database = client.db("township_directory");
    const businesses = database.collection("businesses");

    // GET endpoint for root path
    app.get('/', (req, res) => {
      res.send('Welcome to the Township Business API!');
    });

    // POST endpoint to save business data
    app.post('/api/businesses', async (req, res) => {
      try {
        const businessData = req.body;
        const result = await businesses.insertOne(businessData);
        res.status(201).json(result);
      } catch (error) {
        console.error('Error saving business data:', error);
        res.status(500).json({ error: 'Failed to save business data' });
      }
    });

    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

// Execute the run function
run().catch(console.error);

