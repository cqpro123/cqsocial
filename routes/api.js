var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');
var jwt = require('express-jwt');
var auth = jwt({secret: 'SECRET', userProperty: 'payload'});

router.route('/')

  .post(auth, function(req, res, next){
    var post = new Post();
    post.title = req.body.title || post.title;
    post.link = req.body.link || post.link;

    post.save(function(err, post){
      if(err){ return next(err); }
      res.json(post);
    });
  })

  .get(function(req, res, next){
    Post.find(function(err, posts){
      if(err){ return next(err); }
      res.json(posts);
    });
  });

router.param('post_id', function(req, res, next, id){
  var query = Post.findById(id);

  query.exec(function(err, post){
    if(err){ return next(err); };
    if(!post){ return next(new Error('Can not find post!')); }
    req.post = post;
    return next();
  });
});

router.route('/:post_id')

  .get(function(req, res){
      res.json(req.post);
  })

  .put(function(req, res, next){
    var post = req.post;
    post.title = req.body.title || post.title;
    post.link = req.body.link || post.link;
    post.save(function(err){
      if(err){ return next(err); }
      res.json({ message: 'Data has updated succesfully!'});
    });
  })

  .delete(function(req, res, next){
    Post.remove({
      _id: req.params.post_id
    }, function(err, post){
      if(err){ return next(err); }
      res.json({ message: 'Succesfully deleted!'})  ;
    });
  });

router.route('/:post_id/upvote')

  .put(function(req, res, next){
    req.post.upvote(function(err, post){
      if(err){ return next(err)};
      res.json(post);
    });
  });

router.route('/:post_id/comments')

  .post(auth, function(req, res, next){
    var comment = new Comment(req.body);
    comment.post = req.post;

    comment.save(function(err, comment){
      req.post.comments.push(comment);
      req.post.save(function(err, post){
        if(err){ return next(err); }
        res.json(comment);
      });
    });
  });

router.route('/:post_id/comments/:comment_id')

  .get(function(req, res, next){
    Comment.findById(req.params.comment_id, function(err, comment){
      if(err){ return next(err); }
      res.json(comment);
    });
  });

module.exports = router;




