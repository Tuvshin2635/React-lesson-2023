const { default: mongoose } = require("mongoose");

// const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  createdOn: Date,
  modifiedOn: { type: Date, defailt: Date.now },
  lastLogin: Date,
});

userSchema.statics.findByUserEmail = function (userEmail) {
  return this.find({ email: userEmail }, "_id name email", {
    sort: "modifiedOn",
  });
};

const User = mongoose.model("user", userSchema);

module.exports = User;
