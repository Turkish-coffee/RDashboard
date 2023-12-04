const express = require('express')
const app = express()
const dbo = require("./db/conn");
require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;

const Employee = require('./model/employee')
const Machine = require('./model/machine')
const Sale = require('./model/sale')

app.listen(PORT, async () => {
  console.log(`Server is running on port: ${PORT}`);
  await dbo.connectToServer();

  /*
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
  */
 
});


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/employee/:siteid',(req,res) => {
  res.send('nombre max de personnel juridique dans le meme site')
})

app.get('/sales/top-sales',(req,res) => {
  res.send('le montant le plus élevé de tous les achats')
})

// external db dependency
app.get('/zone/heat',(req,res) => {
  res.send('la zone la plus chaude de tout le groupe laiter')
})

// external db dependency
app.get('/zone/operationnal-rate',(req,res) => {
  res.send('pourcentage de zones conformes')
})

app.get('/machine/out-of-service',(req,res) => {
  res.send('nombre de machines en panne ')
})
