const Product = require('../models/product');
const express = require('express');
const router = express.Router();


exports.getAddProduct =  (req, res, next) => {
  res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
}

// /admin/add-product => POST
exports.postAddProduct = router.post('/add-product', (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
})

exports.getProducts = (req, res, next) => {
const products = Product.fetchall();
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }