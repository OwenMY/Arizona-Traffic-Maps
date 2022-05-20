const { Cameras, Events } = require('./db.js');
const axios = require('axios');
const URL = `https://az511.com/api/v2/get/`;
const { ADOT_API_KEY } = require('./../config.js');

const config = {
  headers: {
    "content-type": "application/json"
  }
};

const getCameras = (req, res) => {
  Cameras.find({})
  .catch((err) => {
    console.error(err);
    res.status(500).send('Internal Error');
  })
  .then((result) => res.send(result));
};

const postCameras = (req, res) => {
  axios.get(URL + `cameras?key=${ADOT_API_KEY}`, config)
  .then((results) => {
    Cameras.insertMany(results.data, (err, docs) => {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        res.send(docs);
      }
    })
  })
  .catch((err) => {
    console.error(err);
    res.sendStatus(500);
  });
};

module.exports = {
  postCameras,
  getCameras
};