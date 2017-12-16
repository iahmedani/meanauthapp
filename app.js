const express = require('express');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Invalid Endpint');
});

app.listen(port, () => {
  console.log('System start at port '+port);
  });