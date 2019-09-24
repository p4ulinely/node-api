const express = require('express');
const router = express.Router();

const ProductController = require('./controllers/ProductContoller');

router.get('/products', ProductController.index);

module.exports = router;