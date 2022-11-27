const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
  judul: String,
  isi: String,
  foto: Buffer,
  komentar: {
      type: mongoose.ObjectId,
      ref: "Komentar"
    }
})

const Forum = mongoose.model("Forum", userSchema)

module.exports = Forum