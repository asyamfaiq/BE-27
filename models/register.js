const mongoose = require('mongoose');
const { Schema } = mongoose

const registerSchema = new Schema({
  username: String,
  email: String,
  password: String,
  gender: String,
  
});

const Register = mongoose.model("Register", registerSchema)

module.exports = Register