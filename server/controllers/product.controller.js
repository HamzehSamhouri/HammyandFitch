const { Product } = require('../models/product.model');

// TEST INDEX
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

// CREATE PRODUCT
module.exports.createProduct = (request, response) => {
    const { gender, title, category, price, description, inventory, primaryimage, secondimage, thirdimage } = request.body;
    Product.create({
        gender,
        title,
        category,
        price,
        description,
        inventory,
        primaryimage,
        secondimage,
        thirdimage
    })
        .then(product => response.json(product))
        .catch(err => response.status(400).json(err))
}

// VIEW ALL PRODUCTS
module.exports.allProducts = (req, res) => {
    Product.find()
        .then((allProducts) => {
            res.json({ results: allProducts });
        })
        .catch((err) => {
            res.json({ message: "Something went wrong", error: err });
        });
};

// VIEW ONE PRODUCT
module.exports.oneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(oneProduct => {
            res.json({ results: oneProduct })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        })
};

// UPDATE PRODUCT
module.exports.updateProduct = (request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true, runValidators: true })
        .then(updatedProduct => response.json(updatedProduct))
        .catch(err => response.status(400).json(err))
}

// DELETE PRODUCT
module.exports.deleteProduct = (request, response) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}