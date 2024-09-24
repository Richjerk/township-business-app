import { json } from '@sveltejs/kit';
import multer from 'multer'; // Assuming you're using multer for file uploads

const upload = multer({ dest: 'uploads/' }); // Specify upload directory

// Handle image upload
export const POST = upload.single('businessImage'), (req, res) => {
  if (req.file) {
    // Handle the uploaded file here (e.g., save the file path in the database)
    return json({ success: true, filePath: req.file.path });
  }
  return json({ success: false, message: 'No file uploaded.' });
};
