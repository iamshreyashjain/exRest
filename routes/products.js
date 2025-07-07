const express = require('express');
const productController  = require('../controller/product')

const router = express.Router();

router
  .get('/', productController.allProducts)
  .get('/:id', productController.productById)
  .post('/', productController.createProduct )
  .put('/:id', productController.updateProuct)
  .delete('/:id', productController.deleteProduct)

exports.router = router;