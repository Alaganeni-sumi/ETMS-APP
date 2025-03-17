const express = require('express');
const auth = require('../middleware/auth');
const { addComment, getComments, getCommentById } = require('../controller/commentController');


const router = express.Router();

router.post("/add",auth,addComment)
router.get("/getall",auth,getComments)
router.get("/get/:id",auth,getCommentById)
 
module.exports = router; 