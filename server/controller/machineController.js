const Machine = require('../model/machine')

// Controller function to handle the logic for fetching users
const getShutDownMachines = async (req, res) => {
    try {
      const totalMachines = await Machine.where({'etat': 'en panne'}).countDocuments();
      res.json({ totalMachines });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports = {
    getShutDownMachines
  };



