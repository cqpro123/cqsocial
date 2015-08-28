var express = require('express');
var path = require('path');
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res){
  res.sendFile('index.html', {root: path.join(__dirname, 'public')});
});

module.exports = router;
