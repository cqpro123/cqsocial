
angular
  .module('app')
  .controller('navCtrl', navCtrl);

navCtrl.$inject = ['$scope', 'authSvc'];

function navCtrl($scope, authSvc){
  $scope.isLoggedIn = authSvc.isLoggedIn;
  $scope.currentUser = authSvc.currentUser;
  $scope.logOut = authSvc.logOut;
}
