const express=require("express");
const bodyParser=require("body-parser");
const https=require("https");
const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("Public"));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/Public/signup.html");
});

app.post("/",(req,res)=>{
    const name=req.body.username;
    const pass=req.body.password;
    const email=req.body.email;
    // localStorage.setItem('dataKey', JSON.stringify({name:name,pass:pass,email:email})); 
    // this will not work as node.js does not support local storage as evething is happing at server side not on client side.....
    // console.log(name + " " + pass + " " + email);
    res.send("thanks for sumit")
    // const url=
});
app.listen(3000,()=>{
    console.log("this server is live at 3000 port");
});
// bd475f6984
// 6b134cf0d434f6dbb8f439e3bb1607ed-us21