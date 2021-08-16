const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
});

app.get('/game-of-life', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/game-of-life.html"));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/not_found.html"));
});

app.listen((process.env.PORT || 3000), () => {
  console.log(`App is listening !`);
});
