import mongoose from 'mongoose';
const { Schema } = mongoose;

const ServerSchema = new Schema({
  type: String,
  created: { type: Date, default: Date.now },
  started: { type: Date },
  connected_players: [],
  cubes: [],
});


var Server = mongoose.model('Server', ServerSchema);
export default Server;
