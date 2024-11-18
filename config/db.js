const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./file-sharing.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT UNIQUE,
            password TEXT,
            role TEXT,
            isVerified INTEGER DEFAULT 0
        )
    `);
    db.run(`
        CREATE TABLE IF NOT EXISTS files (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            filename TEXT,
            uploaderId INTEGER,
            FOREIGN KEY (uploaderId) REFERENCES users (id)
        )
    `);
});

module.exports = db;

