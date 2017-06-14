module.exports = (app) =>{
  var allControllers = require('../controllers/appController');

  app.route('/dogs')
      .get(allControllers.dogs_all)
      .post(allControllers.dogs_new)

  app.route('/');
}
