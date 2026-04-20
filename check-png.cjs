const fs = require('fs');
const stats = fs.statSync('public/portada.png');
console.log('Size PNG:', stats.size);
