

const get_heat_zone = (req, res) => {
    res.send('la zone la plus chaude de tout le groupe laiter')
  };

const get_operational_rate = (req, res) => {
    //res.json();
    res.send('pourcentage de zones conformes')
  };
  
  module.exports = {
    get_heat_zone,
    get_operational_rate
  };