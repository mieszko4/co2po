'use strict';

/**
 * @ngdoc directive
 * @name co2poApp.directive:share
 * @description
 * # share
 */
angular.module('co2poApp')
  .directive('share', function ($location, $sanitize, $window) {
    return {
        scope: { minEmission: '=', chosenEmission: '='},
        templateUrl: 'views/directives/share.html',
        restrict: 'E',
        link: function postLink(scope) {
            scope.$watchCollection('[minEmission, chosenEmission, source, destination]', function(newValues, oldValues, scope) {
                if(typeof scope.minEmission !== 'undefined' && typeof scope.chosenEmission !== 'undefined') {
                    if(scope.chosenEmission.vehicle.type === scope.minEmission.vehicle.type) {
                        scope.text = 'I am a real greener. I will travel with ' + newValues[0].vehicle.type + ' which emmits the smallest ammount of CO2 in the atmosfere. So cool <3';
                    } else {
                        scope.text = 'If I take ' + newValues[0].vehicle.name  + ' instead of ' + newValues[1].vehicle.name + ' I will emmit ' + (scope.chosenEmission.co2 - scope.minEmission.co2) + 'g of CO2 less in the atmosfere! So cool <3';
                    }

                    scope.text = $window.encodeURIComponent(scope.text);
                }
            }, true);

            scope.link = $location.absUrl();
        }
    };
  });
