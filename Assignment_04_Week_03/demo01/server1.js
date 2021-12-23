const express=require('express');
const fs = require('fs');
const app=express();
const port =3000;
//const url = req.url;

    
        app.get('/GET',(req,resp)=>{
            resp.send("CALLED: GET");
        })
     
    
        app.post('/POST',(req,resp)=>{
            resp.send("CALLED: POST");
        })
    
        app.put('/PUT',(req,resp)=>{
            resp.send("CALLED: PUT");
        })
    
        app.delete('/DELETE',(req,resp)=>{
            resp.send("CALLED: DELETE");
        })
      
app.get('/',(req,resp)=>{
    resp.send("WElcome to Express demo");
})
app.get('/index1.html',(req,resp)=>{
    resp.sendFile(__dirname+"/index1.html");
});

app.listen(port,()=>{
    console.log(`http://localhost:${port} Express server started `);;
})