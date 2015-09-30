angular.module('portfoliowebsite', ['ngRoute'])
  
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'assets/.html',
        controller: 'MainCtrl'
      })

      .when('/favorites', {
        templateUrl: 'templates/favorites.html',
        controller: 'FavoritesCtrl'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }])