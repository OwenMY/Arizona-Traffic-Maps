const PORT = require('./config.js');
const express = require('express');
const app = express();
const port = PORT || 5000;

app.json()

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => console.log(`Listening on port ${port}`))
