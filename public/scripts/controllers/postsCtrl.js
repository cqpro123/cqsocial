app.controller('postsCtrl', 
[
  '$scope',
  'postsSvc',
  'notificationSvc',
  function($scope, postsSvc, notificationSvc){
    $scope.posts = [];
    postsSvc.getAll().success(function(data){
      $scope.posts = data;
    });
    
    $scope.addNewPost = addNewPost;
    $scope.deletePost = deletePost;

    function addNewPost(){
      if(!$scope.title){
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
      postsSvc.getAll().success(function(data){
        $scope.posts = data;
      });
    }

    function deletePost(post){
      postsSvc.deletePost(post._id).success(function(){
        notificationSvc.success('Successfully deleted!');
      });
      postsSvc.getAll().success(function(data){
        $scope.posts = data;
      });
    }
  }
]);