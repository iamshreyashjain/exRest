const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const productRouter = require('./routes/products');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

const server = express();

// MongoDB connection
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

// Middleware
server.use(cors());
server.use(express.json());

// Swagger route
server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Product routes
server.use('/products', productRouter.router);

// Start server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
