import mongoose from 'mongoose';
import Human from './Human';
import Player from './Player';
const { Schema } = mongoose;

const UserSchema = new Schema({
  platform:  String,
  platform_id: String,
  registered: { type: Date, default: Date.now },
  player: Player,
  human: Human
});


var User = mongoose.model('User', UserSchema);
export default User;
