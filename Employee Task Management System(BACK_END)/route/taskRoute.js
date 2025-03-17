const express=require('express');
const { addTask, getAllTasks, updateStatusOfTask } = require('../controller/taskController');
const auth = require('../middleware/auth');

const router=express.Router();
router.post("/add/:pid",auth,addTask);
router.get("/getall",getAllTasks);
router.put("/update/:id",auth,updateStatusOfTask)

module.exports=router;