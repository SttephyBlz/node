var express = require('express');
var router = express.Router();

/* GET home page. */
/*Get: para obtener*/
router.get('/', function(req, res, next) {
  /* Renderiza la vista index.ejs y envía una variable 'title'*/
  res.render('index', { title: 'Hola que hace' });
});

/* */

module.exports = router;
