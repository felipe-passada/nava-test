import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
  name: String,
  email: String,
  location: String
})

const UserModel = mongoose.model('Users', UserSchema);

export default UserModel;
