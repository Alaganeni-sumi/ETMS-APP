const Admin = require("../model/admin");
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const { validationResult } = require('express-validator')


exports.addAdmin=async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ err: errors.array() });


    let{username,password}=req.body;



    let salt=10;//when two users give same passwords to then hash password will be given differently 
    const hashedPassword=await bcrypt.hash(password,salt);//in databse the password will be stored in hashed format 
    let admin=new Admin({username,'password':hashedPassword});
    admin=await admin.save();//dbop save method await need to use
    res.json(admin)
}
exports.login=async(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ err: errors.array() });

    let{username,password}=req.body;
    let admin=await Admin.findOne({'username':username});

    if(!admin)
        return res.status(400).json({'msg': 'Invalid Credentials!!'})
    let isValid = await bcrypt.compare(password, admin.password);
    if(!isValid)
        return res.status(400).json({'msg':'Invalid Credentials!!!!'})
    const SECRET_KEY = '20032004';
    let adminObj = {
        'username' : admin.username,
       }
    const token = jwt.sign(adminObj, SECRET_KEY , {'expiresIn' :'20h'});
       res.json({'token' : token})

}


//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzQwNTQ4Njc4LCJleHAiOjE3NDA2MjA2Nzh9.G6L-k66Hfb_PatyteCNSpGG_kIIQsx-JAoDuTKPjKgk
