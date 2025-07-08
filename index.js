const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRouter = require('./routes/products');
require('dotenv').config();

const server = express();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection failed:", err));

server.use(cors());
server.use(express.json());

// ✅ Define routes directly
server.get('/test', (req, res) => {
  res.send('API working 🎉');
});

server.use('/products', productRouter.router); // Your main product routes

// ❌ No need for static files

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
