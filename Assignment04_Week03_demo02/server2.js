const express=require('express');
const app=express();

var bodyParser = require('body-parser');  
var urlencodedParser = bodyParser.urlencoded({ extended: false })  

const port =3000;

app.get('/',(req,resp)=>{
    resp.sendFile(__dirname+"/index1.html");
})

app.post('/register',urlencodedParser,(req,resp) => {
    
    response = {
        fname: req.body.first_name,
        lname: req.body.last_name
    };
     
    if (response.fname != "" && response.lname) {
        resp.sendFile(__dirname+"/success.html");
    }
    else{
        resp.sendFile(__dirname+"/error.html");
    }
})
    
app.listen(port,()=>{
    console.log(`http://localhost:${port} Express server started `);
})