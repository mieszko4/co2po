'use strict';

/**
 * @ngdoc directive
 * @name co2poApp.directive:searcher
 * @description
 * # searcher
 */
angular.module('co2poApp')
  .directive('searcher', function () {
    return {
      templateUrl: 'views/directives/searcher.html',
      restrict: 'E',
      link: function (scope) {
        scope.vehicles = [
          {
            name: 'Car',
            type: 'car'
          },
          {
            name: 'Bus',
            type: 'bus'
          },
          {
            name: 'Train/Tram/Subway',
            type: 'train-tram-subway'
          },
          {
            name: 'Motorcycle',
            type: 'motorcycle'
          },
          {
            name: 'Airplane',
            type: 'airplane'
          },
          {
            name: 'Ferry',
            type: 'ferry'
          }
        ];
        
        scope.searchForm = {
          origin: undefined,
          destination: undefined
        };
      }
    };
  });
