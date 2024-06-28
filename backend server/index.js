const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT
app.use(express.json());
app.use(cors()) ;
app.use(express.urlencoded({ extended: true })); 
app.use(morgan('dev'))


  app.listen(PORT, (req, res) => {
      console.log("server has been started at link: " + `http://localhost:${PORT}/` );
  });