
const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema ({
    id: Number,
    title: String, 
    description: String, 
    price: Number, 
    discountPercentage: Number,
    rating: {type: Number, min :[0, 'Wrong min Rating'], max : [5, 'Wrong Max Rating'] },
    category: String, 
    thumbnail: String, 
    stock: Number,
    images: [String]
})

exports.Product = mongoose.model('Product', productSchema);
