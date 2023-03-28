const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Enter the name"],
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
