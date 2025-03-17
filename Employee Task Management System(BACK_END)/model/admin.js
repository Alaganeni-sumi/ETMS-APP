const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    username: {type: String,required: true },//if it no need compulsorily then we no need to use od required field
    password: {type: String,required: true },
    role: {type: String, default: 'ROLE_ADMIN'}
}); 

const Admin= mongoose.model("Admin", adminSchema); 
module.exports = Admin; 

//schema to model then export