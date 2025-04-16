const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/',(req,res, next)=>{
    // res.sendFile('/views/shop.html'); // This code Don't Work
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
});


module.exports = router;