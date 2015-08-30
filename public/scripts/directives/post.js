
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

      function postComment(post){
        if(!$scope.commentBody){
          return;
        }
        var comment = {
          body: $scope.commentBody
        };
        postsSvc.createComment(post._id, comment).success(function(data){
          post.comments.push(data.body);
        });
        $scope.commentBody = '';
      }; 
    },
    link: function(scope, element, attrs){
      var commentEl = angular.element(element[0].getElementsByClassName('comment'));
      var commentBtn = angular.element(element[0].getElementsByClassName('glyphicon-comment'));

      commentBtn.on('click', function(){
        commentEl.toggleClass('hidden');
      });
    }
  }
}