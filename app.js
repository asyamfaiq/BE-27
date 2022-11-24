require('dotenv').config()
const express = require('express');
const app = express()
const allRoutes = require('./routes');
const db =  require('./config/koneksi')

const PORT = process.env.PORT

db.then(() => {
    console.log("tersambung ke db");
  })
  .catch((err) => console.log(err));

app.use(express.json());

app.listen(PORT, () => {
    console.log(`server run port  ${PORT}`);
})


app.use(allRoutes)