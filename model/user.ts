import mongoose, { Model } from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  isProgrammer: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
