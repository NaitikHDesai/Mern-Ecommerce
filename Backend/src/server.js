const app=require(".");
const { connectDb } = require("./config/Database");

const PORT=5000;
app.listen(PORT,async ()=>{
    await connectDb();
    console.log("Listing on PORT:",PORT);
})