// routes/userRoutes.js
const express = require('express');
const router = express.Router();

// Import the controller
const employeeController = require('../controller/employeeController');

// Define a route to handle GET requests for fetching users

//returns the number of all the employees in the database
router.get('/employees', employeeController.getEmployees);

// return all the employees in the juridic field in the database
router.get('/employees/:siteid', employeeController.get_Juridic_Status_Employees);

module.exports = router;