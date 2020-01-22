const express = require('express');

const app = express();

const port = 5000;

app.get("/",(req,res)=>{
    res.send('now');
});
app.get("/test",(req,res)=>{
    res.send({"status":200,"message":"ok"});
});
app.get("/time",(req,res)=>{
    let myDate = new Date();
res.send({"status":200,"message":`${myDate.getHours()}:${myDate.getMinutes()}`});
});
app.listen(port,()=>{
    console.log(`Server listenning on http://localhost:${port}`);
})