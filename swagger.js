const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product API',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'https://exrest.onrender.com', // ✅ Make sure this is correct
      },
    ],
  },
  apis: ['./routes/*.js'],
};
