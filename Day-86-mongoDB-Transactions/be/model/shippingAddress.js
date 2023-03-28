const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: [true, "fill the address"],
  },
  user_id: {
    type: String,
    required: [true, "Enter the LASTNAME"],
    unique: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
