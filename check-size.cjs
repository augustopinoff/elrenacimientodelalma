const fs = require('fs');
const stats = fs.statSync('public/portada.jpg');
console.log('Size:', stats.size);
