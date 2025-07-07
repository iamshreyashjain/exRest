// const morgan = require('morgan');
// server.use(morgan("tiny"))
const express = require('express');
const server = express();
const productRouter = require('./routes/products')
const mongoose = require('mongoose');
require('dotenv').config()


async function main() {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

main(); // <== YOU NEED TO CALL THIS




server.use(express.json());
server.use(express.static('public'));

server.use('/products', productRouter.router)

// const auth = (req, res, next) =>{
//   console.log(req.query);
//   if(req.body.password == "123"){
//     next();
//   }
//   else{
//     res.sendStatus(401);
//   }
// }
// server.use(auth)



server.listen(process.env.PORT, ()=>{
    console.log("server Boomed")
});