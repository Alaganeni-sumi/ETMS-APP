const Admin = require("../model/admin");
const Project = require("../model/project");
const Task = require("../model/task");

exports.addTask=async(req,res)=>{
    obj=req.user
        let username=obj.username


        let admin =await Admin.findOne({'username':username});
        if(admin)
            return res.json(admin)

    const pid=req.params.pid;
    let{title, shortDescription, estimatedEndDate}=req.body;
    let project = await Project.findById(pid); 
    if(!project)
        return res.status(400).json({'msg' : 'Invalid project Id given..'})

    let task = new Task ({title, shortDescription, estimatedEndDate, 
        'project':project._id });
    task = await task.save();
    return res.json(task);


}
exports.getAllTasks=async(req,res)=>{
    let tasks = await Task.find().populate('project');
    res.json(tasks)
}

exports.updateStatusOfTask = async(req, res) => {
    try
    {
        const id = req.params.id;
        let obj={$set:(req.body)}

        const task = await Task.findByIdAndUpdate(
            id,obj);
            if(!task){
                res.status(400).json({'msg':`Invalid ID: ${id}`})
            }
            else{
                return res.status(200).json(task);

            }
     
    }
    catch(err)
    {
        res.status(400).json({'msg': `Error in api ${err}`});
    }
}