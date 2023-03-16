const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  position: Number,
  children: [
    {
      title: String,
      position: Number,
    },
  ],
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
