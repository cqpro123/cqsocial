
angular
  .module('app')
  .controller('postsCtrl', postsCtrl);

postsCtrl.$inject = ['$scope', 'postsSvc', 'notificationSvc'];

function postsCtrl($scope, postsSvc, notificationSvc){
  $scope.posts = [];
  getAllPosts();
  
  $scope.addNewPost = addNewPost;
  $scope.deletePost = deletePost;
  $scope.incrementUpvotes = incrementUpvotes;


  $scope.test = function(){
    console.log(111);
  }


  function getAllPosts(){
    postsSvc.getAll().success(function(data){
      $scope.posts = data;
    });
  }

  function addNewPost(){
    if(!$scope.title){
      notificationSvc.error('Title required!');
      return;
    }

    var post = {
      title: $scope.title,
      link: $scope.link
    };

    postsSvc.createPost(post).success(function(){
      notificationSvc.success('Successfully added!');
    });
    $scope.title = '';
    $scope.link = '';
    getAllPosts();
  }

  function deletePost(post){
    postsSvc.deletePost(post._id).success(function(){
      notificationSvc.success('Successfully deleted!');
    });
    getAllPosts();
  }

  function incrementUpvotes(post){
    postsSvc.upvote(post._id).success(function(){
      post.upvotes +=1;
      notificationSvc.success('Upvoted!')
    });
  }
}
