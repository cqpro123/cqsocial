
angular
  .module('app')
  .controller('authCtrl', authCtrl);

authCtrl.$inject = ['$scope', 'authSvc', '$location'];

function authCtrl($scope, authSvc, $location){
  $scope.user = {};

  $scope.register = register;
  $scope.logIn = logIn;

  function register(){
    authSvc.register($scope.user).error(function(error){
      $scope.error = error;
    }).then(function(){
      $location.path('/');
    });
  }

  function logIn(){
    authSvc.logIn($scope.user).error(function(error){
      $scope.error = error;
    }).then(function(){
      $location.path('/');
    });
  }
}
