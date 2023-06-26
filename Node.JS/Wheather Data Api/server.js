const express =require("express");
const https =require("https");
const bodyparser =require("body-parser");
const app=express();

app.use(bodyparser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
});
app.post("/",(req,res)=>{
    const city=req.body.city;
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=ec6b0ef21b2e7bdaac9f4445828b3a10";
    https.get(url,response=>{
        console.log(response.statusCode);
        response.on("data",Data=>{
            const w=JSON.parse(Data);
            const temp=w.main.temp;
            const img=w.weather[0].icon;
            const imgurl="https://openweathermap.org/img/wn/" + img + "@2x.png";
            console.log(temp);
            res.write("<h1>temperature of the "+city+" is :- "+temp+"</h1>");
            res.write("<img src=" + imgurl + ">");
            res.send();
        });
    });
});

app.listen(3000,()=>{
    console.log("this server is live");
});