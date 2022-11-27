const express = require("express");
const router = express.Router();
const { getForumById } = require("../controllers/dashboard.controller");

router.get('/', getForumById)

module.exports = router