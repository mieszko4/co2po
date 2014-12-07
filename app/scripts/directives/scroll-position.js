'use strict';

/**
 * @ngdoc directive
 * @name co2poApp.directive:scrollPosition
 * @description
 * # scrollPosition
 */
angular.module('co2poApp')
.directive('scrollPosition', ['$window', '$timeout', '$parse', function($window, $timeout, $parse) {
    return function(scope, element, attrs) {
        var windowEl = angular.element($window)[0];
        var directionMap = {
            'up': 1,
            'down': -1,
            'left': 1,
            'right': -1
        };
        var directionX, directionY;

        // We retrieve the element with the scroll
        scope.element = angular.element(element)[0];

        // We store all the elements that listen to this event
        windowEl._elementsList = $window._elementsList || [];
        windowEl._elementsList.push({element: scope.element, scope: scope, attrs: attrs});

        var element, index, model, scrollAnimationFunction, tmpYOffset = 0, tmpXOffset = 0;
        var userViewportOffset = 0;

        function triggerScrollFunctions() {

            for (var i = windowEl._elementsList.length - 1; i >= 0; i--) {
                element = windowEl._elementsList[i].element;
                if(!element.firedAnimation) {
                    directionY = tmpYOffset - windowEl.pageYOffset > 0 ? 'up' : 'down';
                    directionX = tmpXOffset - windowEl.pageXOffset > 0 ? 'left' : 'right';
                    tmpXOffset = windowEl.pageXOffset;  
                    tmpYOffset = windowEl.pageYOffset;
                    //if(element.offsetTop - userViewportOffset < windowEl.pageYOffset && element.offsetHeight > (windowEl.pageYOffset - element.offsetTop)) {
                        model = $parse(windowEl._elementsList[i].attrs.scrollAnimation);
                        scrollAnimationFunction = model(windowEl._elementsList[i].scope);
                        windowEl._elementsList[i].scope.$apply(function () {
                            element.firedAnimation = scrollAnimationFunction(directionMap[directionX], windowEl.pageYOffset);
                        });
                        if(element.firedAnimation) {
                            windowEl._elementsList.splice(i, 1);
                        }
                    //}
                } else {
                    index = windowEl._elementsList.indexOf(element); //TODO: Add indexOf polyfill for IE9 
                    if (index > 0) {
                        windowEl._elementsList.splice(index, 1);
                    }
                }
            }
        }
        windowEl.onscroll = triggerScrollFunctions;
    };   
}]);