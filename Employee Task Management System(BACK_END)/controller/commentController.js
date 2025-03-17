const Comment = require("../model/comments");
const Employee = require("../model/employee");
const Task = require("../model/task");

exports.addComment=async(req,res)=>{

   try{
    let obj=req.user;
    let usernam=obj.username;
    let employee=await Employee.findOne({'username':usernam})
    if(!employee){
        return res.status(401).json({'msg':Unauthorized})
    }
    let{message,commentDate,task}=req.body;
    let existingTask=await Task.findById(task)
    if(!existingTask){
        return res.status(400).json({msg:'invalid task id '})
    }
    let comment=new Comment({'username':usernam,message,commentDate,task})
    comment=await comment.save();
    return res.status(200).json(comment);


   }
   catch(err){
    return res.status(400).json(err)

   }

}
exports.getComments=async(req,res)=>{
    try{
        let comment=await Comment.find();
        return res.status(200).json(comment)
    }
    catch(err){
        return res.status(400).json('Error in api')
    }
}
exports.getCommentById = async(req, res) => {
    try
    {
        const {id} = req.params;
        const comments = await Comment.find({'task': id});
        res.status(200).json(comments)
    }
    catch(err)
    {
        res.status(400).json({'msg':'Error in api'})
    }
}