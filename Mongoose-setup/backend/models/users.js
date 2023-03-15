const { default: mongoose } = require("mongoose");

// const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: String,
  email: String,
  createdOn: String,
});

const User = mongoose.model("user", userSchema);

module.exports = User;
