const express = require('express');
const app = express();

const cors = require("cors")

const port = 3001;

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello from the backend');
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});