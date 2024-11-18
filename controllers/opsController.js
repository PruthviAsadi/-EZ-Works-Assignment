const db = require('../config/db');

const uploadFile = (req, res) => {
    const { user } = req;
    if (user.role !== 'Ops') return res.status(403).json({ message: 'Forbidden' });

    const { filename } = req.file;
    db.run(`INSERT INTO files (filename, uploaderId) VALUES (?, ?)`, [filename, user.id], (err) => {
        if (err) return res.status(500).json({ message: 'Error uploading file' });
        res.status(200).json({ message: 'File uploaded successfully' });
    });
};

module.exports = { uploadFile };
