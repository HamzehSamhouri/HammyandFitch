const ProductController = require('../controllers/product.controller');
module.exports = function(app){


// TEST INDEX
    app.get('/api/', ProductController.index);

//Create
    app.post('/api/new/product', ProductController.createProduct);

//Read All
    app.get("/api/products", ProductController.allProducts);

//Read One
    app.get("/api/product/:id", ProductController.oneProduct);

// Update
    app.put('/api/product/:id', ProductController.updateProduct);

// Delete
app.delete('/api/product/:id', ProductController.deleteProduct);
}