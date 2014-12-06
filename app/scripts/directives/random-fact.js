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
        scope.fact = randomFact.getFact(scope.term);
      }
    };
  });
