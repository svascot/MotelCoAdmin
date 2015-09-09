'use strict';

/**
 * @ngdoc function
 * @name motelCoAdminApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the motelCoAdminApp
 */
angular.module('motelCoAdminApp')
  .controller('CuartosCtrl', function ($scope, Cuartos) {

    var promise = Cuartos.getCuartos();
	promise.then(function (data)
	{
		$scope.cuartos = data.data[0];
	});

  });
