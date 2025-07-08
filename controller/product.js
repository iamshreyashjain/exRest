const model = require('../model/product')
const Product = model.Product;


exports.allProducts = async (req, res) => {
  try {
    const products = await Product.find(); // fetches all documents from 'products' collection
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

exports.productById = async (req, res) => {
  try {
    const id = +req.params.id;

    const product = await Product.findOne({id: id}); // ✅ Use findById instead of findOne


    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (err) {
    console.error("Error fetching product:", err);

    // Handle invalid ObjectId format
    if (err.name === 'CastError') {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    res.status(500).json({ error: 'Failed to fetch product' });
  }
};

let lastId = 10;


exports.createProduct = async (req, res) => {
  try {
    // Get product data from request body
    const { 
      id, title, description, price, 
      discountPercentage, rating, brand, 
      category, thumbnail, stock, images 
    } = req.body;

    // Create new product using Mongoose
    const product = new Product({
      id: lastId++,
      title,
      description,
      price,
      discountPercentage,
      rating,
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
    res.status(500).json({ error: err });
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    console.log("Updating product with id:", id); // debug log
    const updateData = req.body;

    const updatedProduct = await Product.findOneAndUpdate(
      { id: id },
      updateData,
      {
        new: true,
        runValidators: true,
        // DO NOT include upsert: true here
      }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found with id " + id });
    }

    res.json(updatedProduct);
  } catch (err) {
    console.error("Error updating product:", err);
    res.status(500).json({ error: 'Failed to update product' });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
const id = +req.params.id;
const deletedProduct = await Product.findOneAndDelete({ id });  // note: passing object
console.log("Deleted Product:", deletedProduct);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully", deletedProduct });
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ error: 'Failed to delete product' });
  }
};
