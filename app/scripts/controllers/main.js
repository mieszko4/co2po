'use strict';

/**
 * @ngdoc function
 * @name co2poApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the co2poApp
 */
angular.module('co2poApp')
  .controller('MainCtrl', function ($scope, $anchorScroll, $location, Vehicle) {
    $scope.showResult = false;
    $scope.origin = undefined;
    $scope.destination = undefined;
    $scope.vehicle = undefined;
    
    $scope.processResult = function (origin, destination, vehicle) {
      $scope.showResult = true;
      $location.hash('search-result');
      $anchorScroll();
      
      $scope.origin = origin;
      $scope.destination = destination;
      $scope.vehicle = vehicle;
    };
    
    
    $scope.minimumEmission = undefined;
    $scope.chosenEmission = undefined;
    $scope.processCo2s = function (co2s) {
      $scope.minimumEmission = Vehicle.getMinimumCo2(co2s);
      $scope.chosenEmission = Vehicle.getChosenCo2(co2s, $scope.vehicle);
    };
    
    $scope.startTrip = false;
    $scope.runTrip = function () {
      $scope.startTrip = true;
      $location.hash('trip');
      $anchorScroll();
      
      console.log('and the fun begins');
    };
  });
