const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();
const config = require('./config');
const router = require('./router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static('client'));


// Middleware for allowing Vuejs App to communicate with the server
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization, token");
    next();
});

router.set(app);


// Starting the server
app.listen(config.port, () => console.log(`App listening on port ${config.port}`));