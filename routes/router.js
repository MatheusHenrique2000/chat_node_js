var express = require('express');
var router = express.Router();

// var indexController = require('../controllers/index.js');
var loginController = require('../controllers/login.js');
var chatController = require('../controllers/chat.js');

// router.get('/', indexController.getIndex);
router.get('/', loginController.getLogin);
// router.get('/login', loginController.getLogin);
router.get('/login/:err?', loginController.getLogin);
router.get('/chat', chatController.getChat);
router.post('/chat', chatController.postChat);

// module.exports = router;
module.exports = (app) => app.use('/', router);
