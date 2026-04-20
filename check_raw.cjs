const https = require('https');
https.get('https://raw.githubusercontent.com/augustopinoff/elrenacimientodelalma/main/public/portada.png', (res) => {
  console.log('portada.png:', res.statusCode);
});
https.get('https://raw.githubusercontent.com/augustopinoff/elrenacimientodelalma/main/public/portada.jpg', (res) => {
  console.log('portada.jpg:', res.statusCode);
});
