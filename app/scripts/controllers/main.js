'use strict';

/**
 * @ngdoc function
 * @name co2poApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the co2poApp
 */
angular.module('co2poApp')
  .controller('MainCtrl', function ($scope) {
    $scope.startTrip = false;
    $scope.origin = undefined;
    $scope.destination = undefined;
    
    $scope.processResult = function (origin, destination) {
      $scope.startTrip = true;
      $scope.origin = origin;
      $scope.destination = destination;
    };
  });
