'use strict';

/**
 * @ngdoc directive
 * @name co2poApp.directive:statistics
 * @description
 * # statistics
 */
angular.module('co2poApp')
  .directive('statistics', function (Vehicle) {
    return {
      templateUrl: 'views/directives/statistics.html',
      restrict: 'E',
      link: function (scope) {
        scope.distance = 100;
        scope.co2s = [];
        scope.maxCO2 = undefined;
        scope.$watch('distance', function (newValue) {
          scope.co2s = Vehicle.getCO2(newValue);
          
          scope.maxCO2 = 0;
          angular.forEach(scope.co2s, function (co2) {
            if (co2.co2 > scope.maxCO2) {
              scope.maxCO2 = co2.co2;
            }
          });
        });
      }
    };
  });
