'use strict';

/**
 * @ngdoc directive
 * @name co2poApp.directive:footer
 * @description
 * # footer
 */
angular.module('co2poApp')
  .directive('footer', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the footer directive');
      }
    };
  });
