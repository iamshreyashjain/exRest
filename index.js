// const morgan = require('morgan');
// server.use(morgan("tiny"))
const express = require('express');
const server = express();
const productRouter = require('./routes/products')
const mongoose = require('mongoose');

const cors = require('cors')
require('dotenv').config()


async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

main(); // <== YOU NEED TO CALL THIS

server.use(cors())
server.use(express.json());
server.use(express.static('public'));

server.use('/products', productRouter.router)


server.listen(process.env.PORT, ()=>{
    console.log("server Boomed")
});