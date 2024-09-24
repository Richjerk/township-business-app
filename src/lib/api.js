// src/lib/api.js

export async function submitBusinessData(businessData) {
  try {
    const response = await fetch('/api/businesses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(businessData),
    });

    if (!response.ok) {
      throw new Error('Error saving business data');
    }
    
    return await response.json(); // Return the JSON response if needed
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to handle it in the calling function
  }
}
