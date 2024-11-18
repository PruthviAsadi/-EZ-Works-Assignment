const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const db = require('../config/db');

const SECRET_KEY = 'secureSecretKey';

const signUp = (req, res) => {
    const { email, password } = req.body;
    const token = crypto.randomBytes(16).toString('hex');

    db.run(`INSERT INTO users (email, password, role) VALUES (?, ?, ?)`, [email, bcrypt.hashSync(password, 10), 'Client'], (err) => {
        if (err) return res.status(500).json({ message: 'Error creating user' });

        const verificationLink = `http://localhost:3000/client/verify-email?token=${token}`;
        // Send email logic here
        res.status(200).json({ encryptedUrl: verificationLink });
    });
};

// Other methods omitted for brevity
module.exports = { signUp };
