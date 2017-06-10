const User = require('../models/user'),
      bCrypt = require('bcrypt-nodejs');
//Controller
function newUser(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var password = req.body.password;

  if(name == undefined || email == undefined || password == undefined){
    res.status(500).json({success: false, message: 'Faltan parametros'});
  }else{
    var newUser = new User();

    newUser.name = name;
    newUser.email = email;
    newUser.password = createHash(password);

    newUser.save((err) =>{
      if(err){
        res.status(500).json({success: false, message: 'No se pudo guardar el usuario'});
      }else{
        res.status(200).json({success: true, message: 'Usuario guardado exitosamente.'});
      }
    });
  }

}

function getUsers(req, res, next) {
  res.json({message: 'Todo bien'});
}

//Created
var createHash = function(password) {
    return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
}

var isValidPassword = function(user, password) {
    return bCrypt.compareSync(password, user.password);
}

module.exports = {
  newUser,
  getUsers
}
