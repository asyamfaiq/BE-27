const express = require("express");
const router = express.Router();
const { getAllForum } = require("../controllers/dashboard.controller");

router.get('/', getAllForum)

module.exports = router