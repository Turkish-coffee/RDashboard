const Sale = require('../model/sale')

const getTopSale = async (req, res) => {
    try {
        const mostExpensiveSale = await Sale
        .findOne({"type": "Achat"})
        .sort({'marge_degagée': 'desc'});
        
        res.json({ mostExpensiveSale });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
  };

  module.exports = {
    getTopSale
  };