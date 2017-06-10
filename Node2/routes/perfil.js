var express = require('express');
var router = express.Router();

router.get('/perfil', (req,res,next)=>{
  res.render('perfil', { title: 'hola'});
  //console.log(req.params.title);
});

module.exports = router;
