const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('¡Servidor Backend funcionando!');
});

app.listen(port, () => {
  console.log(`Backend escuchando en http://localhost:${port}`);
});