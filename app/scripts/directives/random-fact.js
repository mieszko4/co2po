'use strict';

/**
 * @ngdoc directive
 * @name co2poApp.directive:randomFact
 * @description
 * # randomFact
 */
angular.module('co2poApp')
  .directive('randomFact', function (randomFact, $window) {
    return {
      scope: { term: '@', triggerOnScroll: '@' },
      templateUrl: 'views/directives/random-fact.html',
      restrict: 'E',
      link: function (scope, element) {
        randomFact.getFact(scope.term).then(function(fact) {
            scope.fact =fact;
        });
        
        if (scope.triggerOnScroll) {
          var active = false;
          var checkTrigger = function () {
            var st = $windowElement.scrollTop() + $windowElement.height()*3/4;
            
            if (st > element.offset().top) {
              element.removeClass('not-active');
              active = true;
            }
          };
          
          var $windowElement = angular.element($window);
          $windowElement.on('scroll', function () {
            if (active) {
              return;
            }
            checkTrigger();
          });
          checkTrigger();
        }
      }
    };
  });
