const model = require('../model/product')
const Product = model.Product;

exports.allProducts = (req, res)=>{
    res.json(products);
}

exports.productById = (req, res) => {
  const id = +req.params.id;
  const product = products.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}



exports.createProduct = async (req, res) => {
  try {
    // Get product data from request body
    const { title, description, price, discountPercentage, rating, brand, category, thumbnail, stock, images } = req.body;

    // Create new product using Mongoose
    const product = new Product({
      title,
      description,
      price,
      discountPercentage,
      rating,
      brand,
      category,
      thumbnail,
      stock,
      images
    });

    // Save to MongoDB
    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (err) {
    console.error("Error saving product:", err);
    res.status(500).json({ error: 'Failed to create product' });
  }
};


exports.updateProuct = (req, res) => {
  const id = +req.params.id;
  const { title } = req.body;

  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index].title = title || products[index].title;
    res.json(products[index]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
}


exports.deleteProduct  = (req, res) => {
  const id = +req.params.id;
  const filtered = products.filter(p => p.id !== id);
  if (filtered.length === products.length) {
    return res.status(404).json({ message: "Product not found" });
  }
  products = filtered;
  res.json(products);
}
