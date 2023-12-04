// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Import the controller
const saleController = require('../controller/saleController');

// Define a route to handle GET requests for fetching users

//returns the most expensive sale of the database
router.get('/sales/top-sales', saleController.getTopSale);

module.exports = router;