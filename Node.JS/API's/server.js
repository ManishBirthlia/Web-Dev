const express =require("express");
const app=express();
const https=require("https");
const { stringify } = require("querystring");

app.get("/",(req,res)=>{
    const url="https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=ec6b0ef21b2e7bdaac9f4445828b3a10";
    https.get(url,(response)=>{
        console.log(response.statusCode);
        response.on("data",(data)=>{
            const w=JSON.parse(data);
            const temp=w.main.temp;
            console.log(temp);
            res.write("Temperature  :- "+temp);
            res.send();
        });
    });
});

app.listen(3000,()=>{
    console.log("the server is live")
});