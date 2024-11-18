const bcrypt = require('bcrypt');
const db = require('../config/db');

const createUser = (email, password, role, callback) => {
    const hashedPassword = bcrypt.hashSync(password, 10);
    db.run(`INSERT INTO users (email, password, role) VALUES (?, ?, ?)`, [email, hashedPassword, role], callback);
};

const findUserByEmail = (email, callback) => {
    db.get(`SELECT * FROM users WHERE email = ?`, [email], callback);
};

module.exports = { createUser, findUserByEmail };
