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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });