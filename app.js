const express = require('express');
const path = require('path');
const passport = require('passport');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const config = ('./config/database');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});


const app = express();

const port = 3000;

app.use(cors());


// Body Parser Middleware
app.use(bodyParser.json());


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

const users = require('./routes/users');

app.use('/users',users);

app.get('/', (req, res) => {
  res.send('Invalid Endpint');
});

app.listen(port, () => {
  console.log('System start at port '+port);
  });