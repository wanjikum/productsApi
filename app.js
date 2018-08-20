const express = require('express');
const bodyParser = require('body-parser');

const product = require('./routes/product.route'); // Imports routes for the products

// initialize our express app
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://Millicent:millicent1@ds125472.mlab.com:25472/millyproductstutorial';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/products', product);

let port = 1234;

// Next step would be dedicating a port number and telling our express app to listen to that port.
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

