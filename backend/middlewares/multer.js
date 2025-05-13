// middleware/upload.js
import multer from "multer";
const storage = multer.memoryStorage(); // Lưu file tạm trong RAM
const upload = multer({ storage });
export default upload;
