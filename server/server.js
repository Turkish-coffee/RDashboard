const express = require('express')
const app = express()

require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT || 5000;



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


const dbo = require("./db/conn");
app.listen(PORT, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
   });
  console.log(`Server is running on port: ${PORT}`);
});