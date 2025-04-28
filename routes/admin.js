const path = require('path');

const express = require('express');

const productcontroller = require('../controller/products');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product', productcontroller.getAddProduct);

router.post('/add-product',productcontroller.postAddProduct);

module.exports = router;
