require('dotenv').config()
const express = require('express');
const app = express()
const allRoutes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose
  .connect(process.env.URL_DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("tersambung ke db");
  })
  .catch((err) => console.log(err));

app.listen(process.env.PORT, (req,res) => {
    console.log(`server run port  ${process.env.PORT}`);
})

app.use(express.json());
app.use(cors());
app.use(allRoutes);