const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
        res.sendFile(__dirname+"/Bmi_Calculator.html");
});
app.post("/",function(req,res){
    var height=Number(req.body.height);
    var weight=Number(req.body.weight);
    var BMI=weight/(height*height);
    res.send(`<h1>Your BMI is ${BMI}</h1>`);
});

app.listen(2000,()=>{
    console.log("this server is live at 2000 port");
});