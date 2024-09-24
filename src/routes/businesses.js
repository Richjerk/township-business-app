// server/routes/businesses.js
import { Router } from 'express';
import { getDatabase } from '../lib/db.js'; // Import getDatabase

const router = Router();

// POST endpoint to save business data
router.post('/', async (req, res) => {
  try {
    const db = await getDatabase(); // Ensure the database is connected
    const result = await db.collection("businesses").insertOne(req.body); // Use the collection
    res.status(201).json(result);
  } catch (error) {
    console.error('Error saving business data:', error);
    res.status(500).json({ error: 'Failed to save business data' });
  }
});

// GET endpoint to retrieve nearby businesses
router.get('/nearby', async (req, res) => {
  try {
    const { lat, lng } = req.query; // Get latitude and longitude from query parameters
    const db = await getDatabase(); // Ensure the database is connected
    const nearbyBusinesses = await db.collection("businesses").find({
      businessLocation: {
        $geoWithin: {
          $centerSphere: [[lng, lat], 5 / 3963.2], // 5 miles radius
        },
      },
    }).toArray();
    res.json(nearbyBusinesses); // Respond with nearby businesses
  } catch (error) {
    console.error('Error retrieving nearby businesses:', error);
    res.status(500).json({ error: 'Failed to retrieve nearby businesses' });
  }
});

export default router;
