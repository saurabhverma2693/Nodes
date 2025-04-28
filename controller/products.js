const express = require('express');
const router = express.Router();
const products = [];

exports.getAddProduct =  (req, res, next) => {
  res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product', formsCSS: true, productCSS: true, activeAddProduct: true });
}

// /admin/add-product => POST
exports.postAddProduct = router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
})

exports.getProducts = (req, res, next) => {

    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }