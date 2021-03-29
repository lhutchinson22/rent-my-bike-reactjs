const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Bike = require("./bikeModel");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Enter a valid email"],
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
  displayName: {
    type: String,
    required: true,
  },
  confirmed: { type: Boolean, default: false },
});

userSchema.post("findOneAndDelete", async (user) => {
  try {
    await Bike.deleteMany({ ownerId: user._id });
  } catch (err) {
    console.log(err);
  }
});

const User = mongoose.model("user", userSchema);

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;
