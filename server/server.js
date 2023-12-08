const express = require('express')
const app = express()
var cors = require('cors')

//create import database and dotenv variables
const dbo = require("./db/conn");
require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT_SERVER;

 // import models
 const Employee = require('./model/employee')
 const Machine = require('./model/machine')
 const Sale = require('./model/sale')
 const formation = require('./model/formation')
 const article = require('./model/article')


// import all routes
const employeeRoutes = require('./routes/employeeRoutes');
const zoneRoutes = require('./routes/zoneRoutes');
const saleRoutes = require('./routes/saleRoutes');
const machineRoutes = require('./routes/machineRoutes');

//define routes from 
app.use('/api/v1', employeeRoutes);
app.use('/api/v1', zoneRoutes);
app.use('/api/v1', saleRoutes);
app.use('/api/v1',machineRoutes);

const corsOptions ={
  origin:'http://localhost:5173', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(cors(corsOptions));


// listen to start the server
app.listen(PORT, async () => {
  console.log(`Server is running on port: ${PORT}`);
  await dbo.connectToServer();

});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

/*
  // import models
  const Employee = require('./model/employee')
  const Machine = require('./model/machine')
  const Sale = require('./model/sale')
  const formation = require('./model/formation')
  const article = require('./model/article')



  // create objects with this scripts

  await Employee.create({
    "identifiant": "123-45-6789",
    "nom_prenom": "Dupont Jean",
    "etat": "actif",
    "service": "commercial",
    "frequence_cardiaque": 75,
    "taux_sudation": 0.5,
    "position": {
      "latitude": 48.8566,
      "longitude": 2.3522
    }
  })
  
  await Machine.create({
    "reference_machine": 1,
      "zone": 101,
      "premiere_mise_en_service": "2022-03-15",
      "cadence_de_production": 500,
      "etat": "active",
      "prochain_entretien": "2023-05-20",
      "utilisateur_actuel": "011"
  })

  await Sale.create({
    "identifiant": 7,
    "type": "Achat",
    "responsable": "007",
    "marge_degagée": 3500,
    "kilometres_parcourus": 90,
    "mot_cle_responsable": "Gestion des stocks",
    "mot_cle_client_fournisseur": "Innovation"
  })

  await formation.create({
    "nom_formation": "gestion des ressources humaines",
    "sujet": "ressources humaines",
    "date_Formation": "2022-03-15",
    "pourcentage_engagement": 80,
    "pourcentage_satisfaction": 10,
    "tag_formateur": "developpement personnel",
    "tag_personnel": "collaboration"
  })
  */