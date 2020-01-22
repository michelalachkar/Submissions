const express = require('express');

const app = express();

const port = 5000;

app.get("/",(req,res)=>{
    res.send('now');
});

app.listen(port,()=>{
    console.log(`Server listenning on http://localhost:${port}`);
})