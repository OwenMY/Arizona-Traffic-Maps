require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.json();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello')
})
app.listen(port, () => console.log(`Listening on port ${port}`))
