const express=require('express');//to manage routes and connection
const dbConnect = require('./config/dbConfig');
const {json}=require('body-parser');

const employeeRoute=require('./route/employeeRoute')
const projectRoute=require('./route/projectRoute')
const taskRoute=require('./route/taskRoute')
const assignRoute=require('./route/assignRoute')
const adminRoute=require('./route/adminRoute')
const authRoute=require('./route/authRoute')
const commentRoute=require('./route/commentRoute')
var cors=require('cors')//it specifies which domain can be accsecible to make request trust one

const app=express();

const $PORT=process.env.$PORT || 5001;//some times the server may be run on cloud or our port number
app.use(express.json())
app.use(cors())
dbConnect();
app.use('/api/employee',employeeRoute)
app.use('/api/project',projectRoute)
app.use('/api/task',taskRoute)
app.use('/api/assign',assignRoute)
app.use('/api/admin',adminRoute)
app.use('/api/auth',authRoute)
app.use('/api/comment',commentRoute)



app.listen($PORT,function(){
    console.log(`Server listening on port ${$PORT}`)
})