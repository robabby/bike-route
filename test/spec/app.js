'use strict';

describe('Main Angular Scope: ', function() {

	beforeEach(module('mytodoApp'));

	var $scope,
		$location,
		$rootScope,
		$httpBackend;

	beforeEach(inject(function ($injector) {
	    $location = $injector.get('$location');
	    $rootScope = $injector.get('$rootScope');
	    $httpBackend = $injector.get('$httpBackend');
	}));

	it('Should be able to navigate to the Home Page', function() {
		$location.path('/');
		expect($location.path()).toBe('/');
	});
	
});