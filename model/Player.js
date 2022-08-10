import mongoose from 'mongoose';
import User from './User';
const { Schema } = mongoose;

const PlayerSchema = new Schema({
  coins: Number,
  premium_coins: Number,
  user: User
});


var Player = mongoose.model('Player', PlayerSchema);
export default Player;
