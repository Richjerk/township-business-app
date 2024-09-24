const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const uri = process.env.MONGODB_URI; // Your MongoDB connection URI
const client = new MongoClient(uri);

async function setValidationRules() {
  try {
    await client.connect();
    const database = client.db("myVirtualDatabase"); // Replace with your database name
    
    const command = {
      collMod: "businesses",
      validator: {
        $jsonSchema: {
          bsonType: "object",
          required: ["businessName", "businessDescription", "businessAddress", "businessPhone", "businessLocation"],
          properties: {
            businessName: {
              bsonType: "string",
              description: "Business Name must be a string and is required"
            },
            businessDescription: {
              bsonType: "string",
              description: "Business Description must be a string and is required"
            },
            businessAddress: {
              bsonType: "string",
              description: "Business Address must be a string and is required"
            },
            businessPhone: {
              bsonType: "string",
              description: "Business Phone must be a string and is required"
            },
            businessImage: {
              bsonType: "string",
              description: "Business Image URL must be a string"
            },
            businessLocation: {
              bsonType: "object",
              required: ["lat", "lng"],
              properties: {
                lat: {
                  bsonType: "double",
                  description: "Latitude must be a double and is required"
                },
                lng: {
                  bsonType: "double",
                  description: "Longitude must be a double and is required"
                }
              }
            }
          }
        }
      },
      validationLevel: "moderate"
    };

    const result = await database.command(command);
    console.log("Validation rules set:", result);
  } catch (error) {
    console.error('Error setting validation rules:', error);
  } finally {
    await client.close();
  }
}

setValidationRules().catch(console.error);
