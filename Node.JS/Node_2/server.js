const express =require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/index.html");
});

app.post("/",(req,res)=>{
    const n1 =Number(req.body.num1);
    const n2 =Number(req.body.num2);
    res.send(`Result : ${n1*n2}`);
});
app.listen(3000,()=>{
    console.log(`The server is live at ${3000}`);
});