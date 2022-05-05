const { PORT } = require('./../config.js');
const express = require('express');
const app = express();
const port = PORT || 5000;
const {getCameras, postCameras} = require('./controllers.js');

app.use(express.json());
app.use(express.static('public'));

app.get('/cameras', getCameras);

app.post('/cameras', postCameras);

app.listen(port, () => console.log(`Listening on port ${port}`))
