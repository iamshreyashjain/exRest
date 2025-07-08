
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema ({
    id: Number,
    title: String, 
    description: String, 
    price: Number, 
    discountPercentage: Number,
    rating: Number, 
    brand: String, 
    category: String, 
    thumbnail: String, 
    stock: Number,
    images: [String]
})

exports.Product = mongoose.model('Product', productSchema);
