'use strict';

angular.module('mytodoApp')
	.controller('navCtrl', ['$scope', '$location', function($scope, $location) {
		$scope.$location = $location;
	}])