const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
    try {
        const data = fs.readFileSync(path.join(__dirname, '/data.json'), 'utf8');
        return {
            statusCode: 200,
            body: data,
            headers: {
                'Content-Type': 'application/json'
            }
        };
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Eroare la citirea fișierului JSON' }),
            headers: {
                'Content-Type': 'application/json'
            }
        };
    }
};
