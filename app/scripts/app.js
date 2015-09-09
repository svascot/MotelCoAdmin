'use strict';

/**
 * @ngdoc overview
 * @name motelCoAdminApp
 * @description
 * # motelCoAdminApp
 *
 * Main module of the application.
 */
angular
  .module('motelCoAdminApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/cuartos', {
        templateUrl: 'views/cuartos.html',
        controller: 'CuartosCtrl',
        controllerAs: 'cuartos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
