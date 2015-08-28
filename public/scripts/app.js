var app = angular.module('app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'mainCtrl'
    })
    .when('/child', {
      templateUrl: 'views/child.html',
      controller: 'childCtrl'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}]);

app.controller('mainCtrl', ['$scope', function($scope){
  $scope.title = 'Hello World';
}]);

app.controller('childCtrl', ['$scope', function($scope){
  $scope.title = 'Hello World from child';
}]);
