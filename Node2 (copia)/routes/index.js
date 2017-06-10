var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/:user?', function(req, res, next) {
  res.render('index', { title: req.params.user });
});
*/

router.get('/', (req,res,next)=>{
  //Busca el archivo y lo muestra
  res.render('index');
});

router.get('/users', function (req, res,html) {
 res.render('users');
});

module.exports = router;
