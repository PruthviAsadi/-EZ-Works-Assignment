const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './uploads/',
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const fileFilter = (req, file, cb) => {
    const allowedExtensions = ['.pptx', '.docx', '.xlsx'];
    const extension = path.extname(file.originalname).toLowerCase();
    if (allowedExtensions.includes(extension)) {
        cb(null, true);
    } else {
        cb(new Error('Only .pptx, .docx, and .xlsx files are allowed'));
    }
};

const upload = multer({ storage, fileFilter });
module.exports = upload;
