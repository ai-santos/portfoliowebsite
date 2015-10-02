(function(){

angular.module('portfoliowebsite', ['ngRoute'])
  
  .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/app.html',
        controller: 'MainCtrl'
      })

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }])

  .controller('MainCtrl', function () {

  })

  .directive('navbar', function(){
    return {
      restrict: 'AE',
      templateUrl: 'templates/navbar.html',
      replace: true
    }
  })

  .directive('top-content', function(){
    return {
      restrict: 'AE',
      templateUrl: 'templates/top-content.html',
      replace: true
    }
  })

  .directive('botom-content', function(){
    return {
      restrict: 'AE',
      templateUrl: 'templates/botom-content.html',
      replace: true
    }
  })

})();