'use strict';

/**
 * @ngdoc function
 * @name motelCoAdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the motelCoAdminApp
 */
angular.module('motelCoAdminApp')
  .service('Cuartos', function($http, $q) {
  
	  var deferred = $q.defer();
	  $http.get('http://www.motelcolombia.com/Carmen.php').then(function (data)
	  {
	    deferred.resolve(data);
	  });

	  this.getCuartos = function ()
	  {
	    return deferred.promise;
	  }
  });
