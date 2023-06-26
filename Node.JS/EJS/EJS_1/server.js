const express= require("express");
const bodyParser=require("body-parser");
const app=express();
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    var today=new Date().getDate();
    res.render("list",{todayDate:today});
});
app.listen(3000,()=>{
    console.log("this server is live at 3000 port");
});