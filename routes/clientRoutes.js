const express = require('express');
const { authenticate, authorize } = require('../middleware/auth');
const { signUp, login, verifyEmail, listFiles, downloadFile } = require('../controllers/clientController');

const clientRouter = express.Router();

// Route for Client User to sign up
clientRouter.post('/signup', signUp);

// Route for email verification
clientRouter.get('/verify-email', verifyEmail);

// Route for Client User to log in
clientRouter.post('/login', login);

// Route to list all uploaded files (restricted to Client Users)
clientRouter.get('/files', authenticate, authorize('Client'), listFiles);

// Route to download a file (restricted to Client Users)
clientRouter.get('/download/:fileId', authenticate, authorize('Client'), downloadFile);

module.exports = clientRouter;
