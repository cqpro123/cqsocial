var app = angular.module('app', ['ui.route', 'toastr']);

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, urlRouterProvider, $locationProvider){
  $stateProvider
    .state({
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'postCtrl'
    })
    .state({
      url: '/register',
      templateUrl: 'views/register.html',
      controller: 'authCtrl'
    })
    .state({
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'authCtrl'
    });

    $urlRouterProvider.otherwise('/home');

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
}]);



//ROUTING WITH ANGULAR ROUTE ===========================================================================

// var app = angular.module('app', ['ngRoute', 'toastr']);

// app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
//   $routeProvider
//     .when('/', {
//       templateUrl: 'views/login.html',
//       controller: 'authCtrl'
//     })
//     .when('/register', {
//       templateUrl: 'views/register.html',
//       controller: 'authCtrl'
//     })
//     .when('/login', {
//       templateUrl: 'views/login.html',
//       controller: 'authCtrl'
//     });

//     $locationProvider.html5Mode({
//       enabled: true,
//       requireBase: false
//     });
// }]);
