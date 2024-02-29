// routes/userRoutes.js
const express = require('express');
const userController = require('../Controllers/salesController');

const router = express.Router();

router.post('/sales', userController.createUser);



module.exports = router;