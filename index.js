const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const server = express();



server.use(morgan("tiny"))

server.use(express.json());
server.use(express.static('public'));

const auth = (req, res, next) =>{
  console.log(req.query);
  if(req.body.password == "123"){
    next();
  }
  else{
    res.sendStatus(401);
  }
}



// server.use(auth)

server.get('/', auth,(req, res)=>{
  res.json({type : "GET"})
})

server.post('/', (req, res)=>{
  res.json({type : "post"})
})

server.put('/', (req, res)=>{
  res.json({type : "put"})
})

server.delete('/', (req, res)=>{
  res.json({type : "delete"})
})

server.listen(8080);