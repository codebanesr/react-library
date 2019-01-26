var express = require('express');
var router = express.Router();
import User from '../models/User'

/* GET users listing. */
router.get('/', function(req, res, next) {
  const { credentials } = req.body;

  User.findOne({email: credentials.email}).then(user=>{
    if(user && user.isValidPassword(credentials.password)){
      res.json({user: {email: user.email }})
    }else{
      res.status(400).json({ errors: {global: "Invalid Credentials "} })
    }
  })

  // find user by email
});

module.exports = router;
