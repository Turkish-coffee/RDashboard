const Employee = require('../model/employee')

// Controller function to handle the logic for fetching users
const getEmployees = async (req, res) => {
    try {
      res.header("Access-Control-Allow-Origin", "*")
      const service = req.query.service
      const totalEmployees = await Employee.where({'service': service}).countDocuments();
      res.json({ totalEmployees });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

// non-dependant
const get_Juridic_Status_Employees = (req, res) => {
    //res.json(users);
    res.send('nombre max de personnel juridique dans le meme site')
  };
  
  
  module.exports = {
    getEmployees,
    get_Juridic_Status_Employees
  };