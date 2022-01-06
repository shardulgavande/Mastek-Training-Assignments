const express = require('express');
const server = express();
const port = 3000;
const  cors = require('cors');
const {response} = require('express');

const CORS_OPTIONS = {
    origin:"http://localhost:4200",
    optionSucessStatus: 200
};
server.use(express.json())
server.use(express.urlencoded({extended:true}));  //to get data in body as key value
server.use(cors(CORS_OPTIONS));


server.get('',(req,resp)=>{

    resp.send("express data");

});
const USERS = [
    {
        id: 1,
        userName: "Shardul"
    },
    {
        id: 2,
        userName: "Sumeet"
    },
    {
        id: 3,
        userName: "Shweta"
    },
];


server.get('/users',(req,resp)=>{

    resp.setHeader("Content-Type","application/json");
    console.log(USERS);
    resp.send(USERS);
});

server.post('',(req,resp)=>{
    resp.setHeader("Content-Type","application/json")
})



server.listen(port,()=>{

    console.log("http://localhost:3000/ started ");

});