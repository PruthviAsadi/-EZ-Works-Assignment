const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');
const upload = require('../middleware/fileValidation');
const { uploadFile } = require('../controllers/opsController');

const opsRouter = express.Router();

// Route for Ops User to upload files
opsRouter.post('/upload', authenticate, authorize('Ops'), upload.single('file'), uploadFile);

module.exports = opsRouter;
