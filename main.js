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

app.use('/starfield', express.static(__dirname + '/views/starfield'));
app.get('/starfield', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/starfield/starfield.html"));
});

app.use('/menger_sponge', express.static(__dirname + '/views/menger_sponge'));
app.get('/menger_sponge', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/menger_sponge/menger_sponge.html"));
});

app.use('/snake', express.static(__dirname + '/views/snake'));
app.get('/snake', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/snake/snake.html"));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/not_found.html"));
});

app.listen((process.env.PORT || 3000), () => {
  console.log(`App is listening !`);
});
