import { json } from '@sveltejs/kit';

// Example to handle POST requests for businesses
export async function POST({ request }) {
  const businessData = await request.json();
  // Save business data to your database here
  // For example: await saveBusinessToDB(businessData);

  return json({ success: true, data: businessData }); // Respond with success
}
