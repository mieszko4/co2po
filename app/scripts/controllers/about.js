'use strict';

/**
 * @ngdoc function
 * @name co2poApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the co2poApp
 */
angular.module('co2poApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.users = [
      {
        name: 'Miłosz Chmura',
        image: ''
      },
      {
        name: 'Tea Pavić',
        image: ''
      },
      {
        name: 'Martina Petraš',
        image: ''
      },
      {
        name: 'Anamarija Mišmaš',
        image: ''
      }
    ];
  });
