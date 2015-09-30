angular.module('portfoliowebsite', ['ngRoute'])
  
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'MainCtrl'
      })

      .when('/mywork', {
        templateUrl: 'templates/mywork.html',
        controller: 'MyWorkCtrl'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }])