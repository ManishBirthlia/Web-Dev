const express=require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/index.html");
});

app.post("/",(req,res)=>{
    var num1=Number(req.body.num1);
    var num2=Number(req.body.num2);
    res.send(`<h1>${num1*num2}</h1>`)
});
app.listen(3000,()=>{
    console.log("this server is live at port 3000");
});