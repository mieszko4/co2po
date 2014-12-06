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
      $scope.$on('rockAndRoll', function (e, direction) {

          console.log('la tortura');
      })
  })
.controller('sliderController', function ($scope) {
    $scope.fireAnimation = function (direction) {
        $scope.$emit('rockAndRoll', direction);
    }
});
