const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Servește fișiere statice din directorul 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint pentru a servi fișierul JSON
app.get('/api/players', (req, res) => {
    fs.readFile(path.join(__dirname, 'data.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Eroare la citirea fișierului JSON');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.listen(PORT, () => {
    console.log(`Serverul rulează la http://localhost:${PORT}`);
});
