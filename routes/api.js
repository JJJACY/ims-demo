var express = require('express');
var router = express.Router();
var userController = require('./../controllers/user');
var articleController = require('./../controllers/article');
var classifyController = require('./../controllers/classify');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/user',userController.all);
router.post('/user',userController.insert);
router.get('/user/:id',userController.single);
router.put('/user/:id',userController.updata);
router.delete('/user/:id',userController.delete);

router.get('/classify',classifyController.all);
router.post('/classify',classifyController.insert);
router.get('/classify/:id',classifyController.single);
router.put('/classify/:id',classifyController.updata);
router.delete('/classify/:id',classifyController.delete);

router.get('/article',articleController.all);
router.post('/article',articleController.insert);
router.get('/article/:id',articleController.single);
router.put('/article/:id',articleController.updata);
router.delete('/article/:id',articleController.delete);
module.exports = router;
