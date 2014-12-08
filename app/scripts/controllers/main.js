'use strict';

/**
 * @ngdoc function
 * @name co2poApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the co2poApp
 */
angular.module('co2poApp')
  .controller('MainCtrl', function ($scope, $location, Vehicle) {
    $scope.showResult = false;
    $scope.origin = undefined;
    $scope.destination = undefined;
    $scope.vehicle = undefined;
    
    $scope.processResult = function (origin, destination, vehicle) {
      $scope.showResult = true;
      
      $scope.origin = origin;
      $scope.destination = destination;
      $scope.vehicle = vehicle;
    };
    
    
    $scope.minimumEmission = undefined;
    $scope.chosenEmission = undefined;
    $scope.processCo2s = function (co2s) {
      $scope.minimumEmission = Vehicle.getMinimumCo2(co2s);
      $scope.chosenEmission = Vehicle.getChosenCo2(co2s, $scope.vehicle);
      
      //TODO: move to directive
      angular.element('html, body').animate({
        scrollTop: angular.element('#search-result').offset().top
      }, 1000);
    };
    
    $scope.startTrip = false;
    $scope.distance = undefined;
    $scope.runTrip = function () {
      $scope.startTrip = true;
      $scope.distance = $scope.chosenEmission.distance / 1000;
      
      //TODO: move to directive
      angular.element('html, body').animate({
        scrollTop: angular.element('#start-trip').offset().top
      }, 2000);
    };
    
    $scope.yes = function () {
      $location.path('/about');
    };
    
    $scope.no = function () {
      $location.path('/about');
    };
  });
