// routes/userRoutes.js
const express = require('express');
const userController = require('../Controllers/productController');

const router = express.Router();

router.post('/product', userController.createUser);



module.exports = router;
