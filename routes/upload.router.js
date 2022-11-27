const express = require("express")
const router = express.Router()
const upload = require('../middleware/uploadfoto')

const { addForum } = require("../controllers/dashboard.controller")

router.post("/",upload.single('picture'), addForum)

module.exports = router