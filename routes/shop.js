const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const adminData = require('./admin');
const router = express.Router();


router.get('/',(req,res, next)=>{
    const products = adminData.products;
    res.render('shop', {prods:products,docTitle:'Shop'});
    // console.log('shop.js',adminData.products)
    // // res.sendFile('/views/shop.html'); // This code Don't Work
    // res.sendFile(path.join(rootDir,'views','shop.html'));
});


module.exports = router;