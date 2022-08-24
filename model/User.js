import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  platform:  String,
  platform_id: String,
  registered: { type: Date, default: Date.now },

});


var User = mongoose.model('User', UserSchema);
export default User;
