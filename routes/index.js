var express = require('express');
var path = require('path');
var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

router.get('*', function(req, res){
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

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

router.post('/register', function(req, res, next){
  console.log(req.body);
  if(!req.body.username || !req.body.password){
    return res.status(400).json({message: 'Please fill out all fields!'});
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
