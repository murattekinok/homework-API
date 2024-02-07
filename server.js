const express = require('express');
const app = express();
const port = 3000;

app.get('/homework', (req, res) => {
  res.send('Welcome to my Express.js server for homework!');
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
