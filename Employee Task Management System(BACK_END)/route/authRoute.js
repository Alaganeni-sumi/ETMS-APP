const express = require('express');
const auth = require('../middleware/auth');
const { getUserInfo, login } = require('../controller/authController');


const router = express.Router();
router.post("/login",login)

router.get("/user",auth,getUserInfo)

module.exports = router;