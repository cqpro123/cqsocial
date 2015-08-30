
angular
  .module('app')
  .directive('post', post);

function post(){
  return {
    restrict: 'E',
    templateUrl: './views/partial/post.html',
    replace: true,
    scope: {
      postObj: '=',
      deletePostFunc: '&',
      incrementUpvotesFunc: '&'
    },
    controller: function($scope, postsSvc){
      $scope.postComment = postComment;
      $scope.getAllCommentsInPost = getAllCommentsInPost;

      getAllCommentsInPost($scope.postObj._id);

      function postComment(post){
        if(!$scope.commentBody){
          return;
        }
        var comment = {
          body: $scope.commentBody
        };
        postsSvc.createComment(post._id, comment).success(function(data){
          post.comments.push(data);
          // getAllCommentsInPost(post._id)
        });
        $scope.commentBody = '';
      }; 

      function getAllCommentsInPost(postId){
        postsSvc.getAllComments(postId).success(function(data){
          $scope.postObj.comments = data;
        });
      }
    },
    link: function(scope, element, attrs){
      var commentEl = angular.element(element[0].getElementsByClassName('comment'));
      var commentBtn = angular.element(element[0].getElementsByClassName('glyphicon-comment'));

      commentBtn.on('click', function(){
        commentEl.toggleClass('active');
      });
    }
  }
}