var express = require('express');
var router = express.Router();

/* GET home page. */
/*router.get('/:user?', function(req, res, next) {
  //Busca el archivo y lo muestra
  res.render('index', { title: req.params.user });
});
*/

router.get('/', (req,res,next)=>{
  res.render('index');
});

router.get('/perfil', (req,res,next)=>{
  res.send('perfil', perfil);
  //console.log(req.params.title);
});

router.get('/agregar_curso', (req, res,next) =>{
 res.render('agregar_curso');
});

router.get('/informacion_curso', (req, res,next) =>{
 res.render('informacion_curso');
});

module.exports = router;
