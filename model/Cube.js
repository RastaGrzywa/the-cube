import mongoose from 'mongoose';
import Server from './Server';
const { Schema } = mongoose;

const CubeSchema = new Schema({
  position_x: Number,
  position_y: Number,
  health: Number, //should be long?
  server: Server
});


var Cube = mongoose.model('Cube', CubeSchema);
export default Cube;
