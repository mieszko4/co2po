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
        scope.origin = {
          lat: 45.374546,
          lng: 15.017002
        };
        scope.destination = {
          lat: 45.815123,
          lng: 15.981682
        };
        
        scope.maxCO2 = undefined;
        scope.distance = undefined;
        Vehicle.getCO2(scope.origin, scope.destination).then(function (co2s) {
          scope.co2s = co2s;
          
          scope.maxCO2 = 0;
          angular.forEach(scope.co2s, function (co2) {
            if (co2.co2 > scope.maxCO2) {
              scope.maxCO2 = co2.co2;
              scope.distance = Math.round(co2.distance / 1000);
            }
          });
        });
      }
    };
  });
