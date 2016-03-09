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

  .directive('topcontent', function(){
    return {
      restrict: 'AE',
      templateUrl: 'templates/topcontent.html',
      replace: true
    }
  })

  .directive('bottomcontent', function(){
    return {
      restrict: 'AE',
      templateUrl: 'templates/bottomcontent.html',
      replace: true
    }
  })

})();