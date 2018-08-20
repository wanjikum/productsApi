const express = require('express');
const bodyParser = require('body-parser');

// initialize our express app
const app = express();

let port = 1234;

// Next step would be dedicating a port number and telling our express app to listen to that port.
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
