const express= require("express");
const bodyParser=require("body-parser");
const app=express();
var items=[];
app.use(express.static("views"));
app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.get("/",(req,res)=>{
    var option={
        weekday:"long",
        month:"long",
        year:"numeric",
        day:"numeric"
    }
    var today=new Date().toLocaleString("hi-IN",option);
    res.render("list",{todayDate:today,ListItem:items});
});
app.post("/",(req,res)=>{
    var item=req.body.listPoint;
    items.push(item);
    res.redirect("/");
});

app.listen(3000,()=>{
    console.log("this server is live at 3000 port");
});