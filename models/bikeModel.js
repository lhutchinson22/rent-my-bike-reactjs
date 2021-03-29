const mongoose = require("mongoose");

const bikeSchema = new mongoose.Schema({
  model: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  wheels: {
    type: Number,
    required: false,
  },
  ownerId: {
    type: String,
    required: true,
  },
  rented: {
    type: Boolean,
    required: true,
    default: false,
  },
  renterId: {
    type: String,
  }
});

var Bike = mongoose.model("bike", bikeSchema);

module.exports = Bike;
