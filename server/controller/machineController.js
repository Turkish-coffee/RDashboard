const Machine = require('../model/machine')

// Controller function to handle the logic for fetching users
const getShutDownMachines = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*")
    try {
      const totalMachines = await Machine.countDocuments();
      const shutDownMachines = await Machine.where({'etat': 'en panne'}).countDocuments();
      const val = shutDownMachines/totalMachines * 100;
      res.json({ val });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports = {
    getShutDownMachines
  };



