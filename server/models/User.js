import mongoose from 'mongoose';

const { Schema, model } = mongoose;


const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 6 },
  blogs: [{ type: mongoose.Types.ObjectId, ref: "Blog", required: true }]
});

const UserModel = model('User', UserSchema);

export default UserModel;

