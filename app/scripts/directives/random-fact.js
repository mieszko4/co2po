'use strict';

/**
 * @ngdoc directive
 * @name co2poApp.directive:randomFact
 * @description
 * # randomFact
 */
angular.module('co2poApp')
  .directive('randomFact', function (randomFact) {
    return {
      scope: { term: '@' },
      templateUrl: 'views/directives/random-fact.html',
      restrict: 'E',
      link: function (scope) {
        randomFact.getFact(scope.term).then(function(fact) {
            scope.fact =fact;
        });
      }
    };
  });
