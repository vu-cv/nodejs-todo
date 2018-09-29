const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
var mongoose = require('mongoose');

var config = require('./config');
var TodoController = require('./api/controllers/TodoController');


var app = express();
var port = process.env.PORT || 80;

app.use('/assets', express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectString());
TodoController(app);
app.get('/', (req, res) => {
	res.render('home');
});

app.listen(port, function () {
	console.log("Server start on port ", port);
});