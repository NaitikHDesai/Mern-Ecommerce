const mongoose=require("mongoose");

const mongoDbUrl="mongodb+srv://naitikhdesai:cfmXsl0spNcpuPyT@cluster0.j71dczj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDb=()=>{
    return mongoose.connect(mongoDbUrl);
}

module.exports={connectDb};