'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mytodoApp
 */
angular.module('bikeRouteApp')
  .controller('MainCtrl', function ($scope, localStorageService) {
    var routesInStore = localStorageService.get('routes');

    $scope.routes = routesInStore && routesInStore.split('\n') || [];
    
    $scope.$watch('routes', function() {
    	localStorageService.add('routes', $scope.routes.join('\n'));
    }, true);

    $scope.addRoute = function() {
    	$scope.routes.push($scope.route);
    	$scope.route = '';
    };
    $scope.removeRoute = function(index) {
    	$scope.routes.splice(index, 1);
    };
  });
