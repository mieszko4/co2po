'use strict';

/**
 * @ngdoc directive
 * @name co2poApp.directive:searcher
 * @description
 * # searcher
 */
angular.module('co2poApp')
  .directive('searcher', function (Vehicle, volvoCo2) {
    return {
      templateUrl: 'views/directives/searcher.html',
      scope: { processResult: '&' },
      restrict: 'E',
      link: function (scope) {
        scope.vehicles = Vehicle.vehicles;
        
        scope.searchForm = {
          origin: undefined,
          destination: undefined,
          vehicle: undefined
        };
        
        scope.search = function () {
          if (typeof scope.searchForm.origin.geometry === 'undefined' || typeof scope.searchForm.destination.geometry === 'undefined' || typeof scope.searchForm.vehicle === 'undefined') {
            return false;
          }
          
          volvoCo2.getEmission({
              lat: scope.searchForm.origin.geometry.location.lat(),
              lng: scope.searchForm.origin.geometry.location.lng()
            },
            {
              lat: scope.searchForm.destination.geometry.location.lat(),
              lng: scope.searchForm.destination.geometry.location.lng()
            }
          ).then(function (emissions) {
            scope.processResult({
              emissions: emissions
            });
          });
        };
        
      }
    };
  });
