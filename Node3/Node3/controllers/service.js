const jwt = require('jwt-simple');
const moment = require('moment');

exports.createToken = (user) => {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(1,'days').unix()
  };

  return jwt.encode(payload, 'ALSKIU19SI8HD91H2DI');  
}
