const mongoose = require('mongoose');
const { Schema } = mongoose

const komenSchema = new Schema({
    nama: {
        type: mongoose.ObjectId,
        ref: "User"
    },

    komentar: {
        type: String,
        required: true
    },
    
    balasan: {
        type: mongoose.ObjectId,
        ref: "User",
        balasan: String
    }
})

const Komentar = mongoose.model("Komentar", komenSchema)

module.exports = Komentar