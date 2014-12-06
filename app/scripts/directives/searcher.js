'use strict';

/**
 * @ngdoc directive
 * @name co2poApp.directive:searcher
 * @description
 * # searcher
 */
angular.module('co2poApp')
  .directive('searcher', function (Vehicle) {
    return {
      templateUrl: 'views/directives/searcher.html',
      restrict: 'E',
      link: function (scope) {
        scope.vehicles = Vehicle.vehicles;
        
        scope.searchForm = {
          origin: undefined,
          destination: undefined
        };
      }
    };
  });
