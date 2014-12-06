'use strict';

/**
 * @ngdoc directive
 * @name co2poApp.directive:randomFact
 * @description
 * # randomFact
 */
angular.module('co2poApp')
  .directive('randomFact', function () {
    return {
      scope: { term: '@' },
      templateUrl: 'views/directives/random-fact.html',
      restrict: 'E',
      link: function (scope) {
        console.log(scope.term);
        scope.fact = 'This is a random fact';
      }
    };
  });
