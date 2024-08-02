const express = require('express');
const path = require('path');
const fs = require('fs');
const serverless = require('serverless-http');


const app = express();
const PORT = process.env.PORT || 9000;

// Servește fișiere statice din directorul 'public'
app.use('/images', express.static(__dirname + '/images'))

// Endpoint pentru a servi fișierul JSON
app.get('/api/news', (req, res) => {
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

module.exports.handler = serverless(app)
