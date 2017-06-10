var express = require('express');
var router = express.Router();

/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

router.get('/', (req,res,next)=>{
  //Busca el archivo y lo muestra
  res.render('users');
});

module.exports = router;
