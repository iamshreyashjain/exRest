// const morgan = require('morgan');
// server.use(morgan("tiny"))


const express = require('express');
const server = express();

server.use(express.json());
server.use(express.static('public'));

const products = [
  { id: 1, title: "Shreyash" },
  { id: 2, title: "iPhone 14" },
  { id: 3, title: "Samsung Galaxy S22" },
  { id: 4, title: "OnePlus 12" }
];

const auth = (req, res, next) =>{
  console.log(req.query);
  if(req.body.password == "123"){
    next();
  }
  else{
    res.sendStatus(401);
  }
}
// server.use(auth)

server.get('/products', (req, res)=>{
    res.json(products);
})

server.get('/products/:id', (req, res) => {
  const id = +req.params.id;
  const product = products.find(p => p.id === id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// POST: Add a new product
server.post('/products', (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Title is required" });
  }
  const newProduct = {
    id: products.length ? products[products.length - 1].id + 1 : 1,
    title
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT: Update an existing product by ID
server.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  const { title } = req.body;

  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index].title = title || products[index].title;
    res.json(products[index]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

// DELETE: Delete a product by ID
server.delete('/products/:id', (req, res) => {
  const id = +req.params.id;
  const filtered = products.filter(p => p.id !== id);
  if (filtered.length === products.length) {
    return res.status(404).json({ message: "Product not found" });
  }
  products = filtered;
  res.json(products);
});

server.listen(8080);