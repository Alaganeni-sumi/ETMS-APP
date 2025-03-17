const mongoose=require('mongoose');//mongoose help us to connect to do programmatically and let us perform db ops
const dbConnect=async()=>
{
    try{
        await mongoose.connect('mongodb+srv://Alaganeni:Student@training-cluster.xt9h5.mongodb.net/etms?retryWrites=true&w=majority&appName=training-cluster');//connection string
        console.log('DB connection established');
    }
    catch(err)
    {
        console.log("error"+err);
    }
    //by using finally in that mongoose.connection.close by this line of code it will be closed of a connection
}
//dbConnect();
module.exports=dbConnect;