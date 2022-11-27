const express = require("express");
const router = express.Router();
const { 
    getAllForum,
    deleteForumById,
    getAllUser
 } = require("../controllers/admin.controller");

router.get('/', getAllForum)
router.get('/', deleteForumById)
router.get('/', getAllUser)

module.exports = router