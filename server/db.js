const mongoose = require('mongoose');

const main = async () => {
  await mongoose.connect(`mongodb://localhost:27017/AZTM`);
};

main()
.catch(err => console.log(err))
.then((res) => console.log('connected to mongodb'));

const camerasSchema = new mongoose.Schema({
  Id: 'String',
  Organization: 'String',
  RoadwayName: 'String',
  DirectionOfTravel: 'String',
  Latitude: 'Number',
  Longitude: 'Number',
  Name: 'String',
  Url: 'String',
  Status: 'String',
  Description: 'String'
});

const eventSchema = new mongoose.Schema({
  Description: 'String',
  DirectionOfTravel: 'String',
  Id: 'String',
  Latitude: 'Number',
  Longitude: 'Number',
  Name: 'String',
  Organization: 'String',
  RoadwayName: 'String',
  Status: 'String',
  Url: 'String',
  __v: 'Number',
  _id: 'String',
});

const Cameras = mongoose.model('cameras', camerasSchema);
const Events = mongoose.model('events', eventSchema);

module.exports = {
  Cameras,
  Events
};