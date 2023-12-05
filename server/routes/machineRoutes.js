// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Import the controller
const machineController = require('../controller/machineController.js');


router.get('/machines/shutdown', machineController.getShutDownMachines);


module.exports = router;