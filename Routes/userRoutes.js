// routes/userRoutes.js
const express = require('express');
const userController = require('../Controllers');

const router = express.Router();

router.post('/user', userController.createUser);



module.exports = router;
