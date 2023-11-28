const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/sales-service/employe',(req,res) => {
  res.send('il y a 14 personnes')
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

app.get('/employe/:siteid',(req,res) => {
  res.send('nombre max de personnel juridique dans le meme site')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})