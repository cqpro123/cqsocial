
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
    }
  }
}