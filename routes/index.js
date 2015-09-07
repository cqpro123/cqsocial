var express = require('express');
var path = require('path');
var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var router = express.Router();
var appDir = path.dirname(require.main.filename);

// middleware to use for all requests
router.use(function(req, res, next) {
  debugger;
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

//Other routes goes here
//....
//....
//....

//This route must be place at the bottom, If not match any routes it will use this route
router.get('*', function(req, res){
  res.sendFile('index.html', {root: path.join(appDir, 'public')});
});

module.exports = router;
