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

app.get('/hello/:id',(req,res)=>{
    const myId = req.params.id;
    res.send({"status":200,"message":`hello ${myId}`});
});

app.get('/search?',(req,res)=>{
    if(req.query.s){
        const mySearch = req.query.s;
   
        res.send({"status":200,"message":"ok","data":mySearch});
    }else{
        res.send({"status":500,"error":true,"message":"you have to provide a search"})
    }
    
});

app.listen(port,()=>{
    console.log(`Server listenning on http://localhost:${port}`);
})