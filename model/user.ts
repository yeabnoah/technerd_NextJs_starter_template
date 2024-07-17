// Mongoose schema for your Entity
// if you wanna create a mongoose Scheme follow the following steps
// 1. create a new file inside models folder
// 2. use the bottom boilerplate code as an example
// 3. export the model and use it in your api

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
