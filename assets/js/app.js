var studioApp = angular.module('StudioApp',['ui.bootstrap','ngRoute']);

studioApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/',{
      templateUrl:'/views/home.html',
      controller:'HomeCtrl'
    })
    .when('/visuals', {
      templateUrl:'/views/visual.html',
      controller:'VisualCtrl'
    })
    .when('/about', {
      templateUrl:'/views/about.html',
      controller:'StaticCtrl'
    })

}])