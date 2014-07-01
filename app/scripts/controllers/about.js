'use strict';

/**
 * @ngdoc function
 * @name mytodoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the mytodoApp
 */
angular.module('mytodoApp')
  .controller('AboutCtrl', function ($scope, geolocation) {
  	$scope.lat = 0;
  	$scope.long = 0;
  	$scope.accuracy = "0";
    $scope.error = "";
    $scope.model = { myMap: undefined };
    $scope.myMarkers = [];

    $scope.showResult = function () {
        return $scope.error == "";
    }

    geolocation.getLocation().then(function (data) {
	    $scope.useLocation(data);
	});

    $scope.useLocation = function(data) {
    	$scope.lat = data.coords.latitude;
    	$scope.long = data.coords.longitude;

	    console.log($scope.lat);	
    };

     $scope.mapOptions = {
        center: new google.maps.LatLng($scope.lat, $scope.lng),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

	// $scope.map = {
	//     center: {
	//         latitude: 0,
	//         longitude: 0
	//     },
	//     zoom: 7
	// };
});