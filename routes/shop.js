const express = require('express');
const path = require('path');
const rootDir = require('../util/path');
const router = express.Router();
const adminData = require('./admin');

router.get('/',(req,res, next)=>{
    console.log('shop.js',adminData.products)
    // res.sendFile('/views/shop.html'); // This code Don't Work
    res.sendFile(path.join(rootDir,'views','shop.html'));
});


module.exports = router;