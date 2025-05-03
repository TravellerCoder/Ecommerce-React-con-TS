const fs = require('fs');
const https = require('https');

// URL de la Fake Store API
const url = 'https://fakestoreapi.com/products/category/electronics';

https.get(url, (res) => {
  let data = '';

  // Recolectar los datos en chunks
  res.on('data', (chunk) => {
    data += chunk;
  });

  // Cuando termina, escribimos en db.json
  res.on('end', () => {
    const productos = JSON.parse(data);
    const db = {
      products: productos
    };

    fs.writeFile('db.json', JSON.stringify(db, null, 2), (err) => {
      if (err) {
        console.error('Error al guardar en db.json:', err);
      } else {
        console.log('Productos guardados en db.json con éxito.');
      }
    });
  });
}).on('error', (err) => {
  console.error('Error al obtener datos de la API:', err);
});