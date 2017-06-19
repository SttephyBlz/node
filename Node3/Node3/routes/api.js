var express = require('express');
var router = express.Router();
var apiController = require('../controllers/apiController');
var middleware = require('../controllers/middleware');

router.get('/users', middleware.ensureAuthenticated, apiController.getUsers);
router.post('/newUser', apiController.newUser);

module.exports = router;
