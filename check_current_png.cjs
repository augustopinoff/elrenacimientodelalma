const fs = require('fs');
if (fs.existsSync('portada.png')) {
  console.log('portada.png exists. size:', fs.statSync('portada.png').size);
} else {
  console.log('No portada.png');
}
