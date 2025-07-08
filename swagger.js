const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product API',
      version: '1.0.0',
      description: 'API docs for your Product service',
    },
    servers: [
      {
        url: 'https://exrest.onrender.com' // ✅ Use your live domain
        // url: 'http://localhost:8080' // ✅ Use your local domain
      },
    ],
  },
  apis: ['./routes/*.js'], // 👈 where your route JSDoc comments live
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
