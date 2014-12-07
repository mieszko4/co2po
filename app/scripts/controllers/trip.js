'use strict';

/**
 * @ngdoc function
 * @name co2poApp.controller:TripCtrl
 * @description
 * # TripCtrl
 * Controller of the co2poApp
 */
angular.module('co2poApp')
  .controller('TripCtrl', function ($scope) {
      $scope.$on('rockAndRoll', function (e, direction, y) {
          $scope.offset = function () {
              return y + 'px';
          }
          console.log('la tortura', direction, y);
      });

      $scope.fireAnimation = function (direction, y) {
          $scope.$emit('rockAndRoll', direction, y);
      };
  })