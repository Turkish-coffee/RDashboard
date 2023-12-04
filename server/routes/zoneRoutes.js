// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Import the controller
const zoneController = require('../controller/zoneController');

// Define a route to handle GET requests for fetching users
router.get('/zones/heat', zoneController.get_heat_zone);
router.get('/zones/operationnal-rate', zoneController.get_operational_rate);

module.exports = router;