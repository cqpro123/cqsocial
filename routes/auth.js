var express = require('express');
var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var router = express.Router();

router.post('/login', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields!'});
  }
  passport.authenticate('local', function(err, user, info){
    if(err){ return next(err);}
    if(user){
      return res.json({token: user.generateJWT()})
    }else{
      return res.status(401).json(info);
    }
  })(req, res, next);
});

var usernameExisted = function(username){
  return User.findOne({username: username}).count();
};

router.post('/register', function(req, res, next){
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields!'});
  }

  if (usernameExisted(req.body.username)) {
    return res.status(500).json({message: 'Username already exist! Please choose another username!'});
  }

  var user = new User();
  user.username = req.body.username;
  user.setPassword(req.body.password);

  user.save(function(err){
    if(err){ return next(err); }
    return res.json({token: user.generateJWT()});
  });
});

module.exports = router;
