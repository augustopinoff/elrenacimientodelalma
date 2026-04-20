const https = require('https');
const fs = require('fs');

const url = 'https://assets.zyrosite.com/AVL1jZaD6qSvODbB/portada_libro-NXjb2RztXmzpPHDD.jpg';
const file = fs.createWriteStream('public/portada.jpg');

https.get(url, { headers: { 'Referer': 'https://zyrosite.com/', 'User-Agent': 'Mozilla/5.0' } }, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Download Completed!');
  });
}).on('error', (err) => {
  console.error('Error: ', err.message);
});
