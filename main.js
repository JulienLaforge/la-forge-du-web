const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + "/views/index.html"));
})

app.listen((process.env.PORT || 3000), () => {
  console.log(`App is listening !`);
})
