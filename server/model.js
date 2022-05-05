const mongoose = require('mongoose');

const camerasSchema = new mongoose.Schema({
  Description: 'String',
  DirectionOfTravel: 'String',
  Id: 'String',
  Latitude: 'Number',
  Longitude: 'Number',
  Name: 'String',
  Organization: 'String',
  RoadwayName: 'String',
  Status: 'String',
  Url: 'String'
});

const Cameras = mongoose.model('Cameras', camerasSchema);

module.exports = {
  Cameras
};