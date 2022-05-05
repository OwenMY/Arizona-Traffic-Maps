const { Cameras } = require('./model.js');
const axios = require('axios');
const URL = `https://az511.com/api/v2/get/`;
const { ADOT_API_KEY } = require('./../config.js');

const config = {
  headers: {
    "content-type": "application/json"
  }
};

const getCameras = (req, res) => {
  //
};

const postCameras = (req, res) => {
  axios.get(URL + `cameras?key=${ADOT_API_KEY}`, config)
  .then((results) => {
    Cameras.insertMany(results, (err, docs) => {
      if (err) {
        console.error(err);
        res.send(err);
      } else {
        res.send(results);
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