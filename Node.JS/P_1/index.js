const express=require("express");
const app=express();

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.get("/contact",function(req,res){
    res.send("YOU CAN CONTACT ME AT manishbirthliya@gmail.com")
});
app.listen(3020,()=>{
    console.log(`The Server is live at port ${3020}`);
});