// convert google-service.json to base64
// Usage: node scripts/googleServiceToBase64.js

const fs = require('fs');
const path = require('path');

const googleServicePath = path.join(__dirname, '../google-service.json');
const googleServiceBase64Path = path.join(__dirname, '../google-service-base64.txt');

const googleService = fs.readFileSync(googleServicePath, 'utf8');
const googleServiceBase64 = Buffer.from(googleService).toString('base64');

fs.writeFileSync(googleServiceBase64Path, googleServiceBase64, 'utf8');

console.log('google-service.json converted to base64');
console.log('base64 string saved to google-service-base64.txt');