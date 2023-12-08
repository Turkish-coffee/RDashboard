const express = require('express')
const app = express()
var cors = require('cors')

//create import database and dotenv variables
const dbo = require("./db/conn");
require("dotenv").config({ path: "./config.env" });
const PORT = process.env.PORT_2;


// import all routes
const zoneRoutes = require('./routes/zoneRoutes');

//define routes from 
app.use('/api/v1', zoneRoutes);

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