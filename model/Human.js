import mongoose from 'mongoose';
import User from './User';
const { Schema } = mongoose;

const HumanSchema = new Schema({
  contact:  String,
  btc_address: String,
  user: User
});


var Human = mongoose.model('Human', HumanSchema);
export default Human;
