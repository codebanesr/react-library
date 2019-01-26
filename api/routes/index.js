var express = require('express');
var router = express.Router();
// import User from '../models/User'
var User = require('../model/user')
/* GET home page. */

router.post('/auth', function(req, res, next){
  const { credentials } = req.body;

  User.findOne({email: credentials.email}).then(user=>{
    if(user && user.isValidPassword(credentials.password)){
      res.status(200).json({user: user.toAuthJSON()})
    }else{
      res.status(400).json({ errors: {global: "Invalid Credentials "} })
    }
  })

})
module.exports = router;
