var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/api/auth', function(req, res, next){
  res.status(400).json({errors: {global: "Invalid Credentials"} })
})
module.exports = router;
