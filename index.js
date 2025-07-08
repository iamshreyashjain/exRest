const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRouter = require('./routes/products'); // <- adjust if needed
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger'); // adjust path as needed


const server = express();

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

server.use(cors());
server.use(express.json());

server.use('/', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ✅ Product routes
server.use('/products', productRouter.router); // <-- Make sure this exists

// Start server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
