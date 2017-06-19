const jwt = require('jwt-simple');
const moment = require('moment');

exports.ensureAuthenticated = (req, res, next) =>{
  if(!req.headers.authorization)
    return res.status(403).json({message: "No cuentas con token de authorizacion"});

  var token = req.headers.authorization;
  var payload = jwt.decode(token, 'ALSKIU19SI8HD91H2DI');

  if(payload.exp <= moment().unix())
    return res.status(401).json({message: 'El token ha expirado'});

  req.user = payload.sub;

  next();
};
