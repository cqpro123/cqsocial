app.controller('postsCtrl', ['$scope', 'postsSvc', function($scope, postsSvc){
  $scope.posts = postsSvc;
}]);