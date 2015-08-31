var app = angular.module('app', ['ngRoute', 'toastr']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
    .when('/', {
      templateUrl: 'views/login.html',
      controller: 'authCtrl'
    })
    .when('/register', {
      templateUrl: 'views/register.html',
      controller: 'authCtrl'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'authCtrl'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}]);
