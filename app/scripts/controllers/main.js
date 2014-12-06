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
    $scope.emissions = [];
    
    $scope.processResult = function (emissions) {
      $scope.startTrip = true;
      $scope.emissions = emissions;
    };
  });
