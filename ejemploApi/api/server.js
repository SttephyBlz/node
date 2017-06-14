const express = require('express'),
      app = express(),
      port = process.env.PORT || 3000,
      mongoose = require('mongoose'),
      dog = require('./models/appModel'),
      bodyParser = require('body-parser');

//Conectarse con mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Api');

app.listen(port);
console.log('Servidor en el puerto '+port);

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

const routes = require ('./routes/appRoute');

routes(app);
