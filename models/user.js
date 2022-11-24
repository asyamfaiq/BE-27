const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    max: 255
  },

  email: {
    type: String,
    required: true,
    max: 100
  },

  password: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  
  dateRegister: {
    type: Date,
    default: Date.now()
  }
  
});

const User = mongoose.model("User", userSchema)

module.exports = User