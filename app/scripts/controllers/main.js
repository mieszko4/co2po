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
    $scope.showResult = false;
    $scope.startTrip = false;
    $scope.origin = undefined;
    $scope.destination = undefined;
    
    $scope.processResult = function (origin, destination) {
      $scope.showResult = true;
      $scope.origin = origin;
      $scope.destination = destination;
    };
  });
