const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRouter = require('./routes/products');
require('dotenv').config();

const server = express();

// DB connect
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection failed:", err));

// Middleware
server.use(cors());
server.use(express.json());

// ✅ API ROUTES FIRST
server.get('/test', (req, res) => {
  res.send('API working 🎉');
});

server.use('/products', productRouter.router);

// ❗️ THEN static files
server.use(express.static('public'));

// Start server
server.listen(process.env.PORT || 8080, () => {
  console.log("server Boomed");
});
