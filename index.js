const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRouter = require('./routes/products');

const server = express();
require('dotenv').config();

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

main();

server.use(cors());
server.use(express.json());

server.get('/test', (req, res) => {
  res.send('API working 🎉');
});


server.use('/products', productRouter.router); // API comes FIRST
server.use(express.static('public')); // Then static files

server.listen(process.env.PORT || 8080, () => {
  console.log("server Boomed");
});
