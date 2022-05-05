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

const Cameras = mongoose.model('cameras', camerasSchema);

module.exports = {
  Cameras
};