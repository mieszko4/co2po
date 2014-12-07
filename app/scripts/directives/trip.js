'use strict';

/**
 * @ngdoc directive
 * @name co2poApp.directive:trip
 * @description
 * # trip
 */
angular.module('co2poApp')
  .directive('trip', function ($window) {
    var width = 300;
    var inc = 200;
    var xMap = {};
    
    return {
      scope: { distance: '@', vehicleType: '@', lineColor: '@' },
      templateUrl: 'views/directives/trip.html',
      restrict: 'E',
      link: function (scope, element) {
        //get height
        var iterations = Math.floor(scope.distance / 100);
        iterations = (iterations < 20) ? iterations : 20;
        scope.height = (2 + iterations) * inc;
        
        element.height(scope.height);
        var canvas = angular.element('<canvas id="trip-canvas" />')[0];
        element.find('.trip-path-wrapper').append(canvas);
        
        canvas.height = scope.height;
        
        canvas.width = width;
        var context = canvas.getContext('2d');
        
        context.lineWidth = 10;
        context.strokeStyle = scope.lineColor;
        
        var drawPath = function (context) {
          context.beginPath();
          
          //first
          var x0 = width/2, y0 = 0;
          var x1 = width/2 + Math.random() * width/2, y1 = inc/2;
          var x2 = width/2 - Math.random() * width/2, y2 = inc/2+10;
          var x3 = width/4 + Math.random() * width/2, y3 = inc;
          context.beginPath();
          context.moveTo(x0, y0);
          context.bezierCurveTo(x1, y1, x2, y2, x3, y3);
          updateXmap(x0, y0, x1, y1, x2, y2, x3, y3);
          context.stroke();
          
          for (var i = 0; i < iterations; i++) {
            context.beginPath();
            x0 = x3;
            y0 = y3;
            context.moveTo(x0, y0);
            x1 = x3 + (x3-x2);
            y1 = y3 + (y3-y2);
            
            x2 = width/2 - Math.random() * width/2;
            x3 = width/4 + Math.random() * width/2;
            
            y2 += inc;
            y3 += inc;
            context.bezierCurveTo(x1, y1, x2, y2, x3, y3);
            updateXmap(x0, y0, x1, y1, x2, y2, x3, y3);
            context.stroke();
          }
          
          //last
          context.beginPath();
          x0 = x3;
          y0 = y3;
          context.moveTo(x0, y0);
          x1 = x3 + (x3-x2);
          y1 = y3 + (y3-y2);
          
          x2 = width/2 - Math.random() * width/2;
          x3 = width/2;
          
          y2 += inc;
          y3 += inc;
          context.bezierCurveTo(x1, y1, x2, y2, x3, y3);
          updateXmap(x0, y0, x1, y1, x2, y2, x3, y3);
          context.stroke();
        };
        
        var updateXmap  = function (x0, y0, x1, y1, x2, y2, x3, y3) {
          for (var t = 0; t <= 1; t += inc / 100000) {
            var x =  Math.pow((1-t), 3) * x0 + 3*Math.pow((1-t), 2) * t * x1 + 3*(1-t) * Math.pow(t, 2) * x2 + Math.pow(t,3) * x3;
            var y =  Math.pow((1-t), 3) * y0 + 3*Math.pow((1-t), 2) * t * y1 + 3*(1-t) * Math.pow(t, 2) * y2 + Math.pow(t,3) * y3;
            
            xMap[Math.round(y)] = x;
          }
        };
        
        drawPath(context);
        
        //animate
        scope.currentDistance = undefined;
        scope.y = undefined;
        var $windowElement = angular.element($window);
        var $vehicle = element.find('.vehicle');
        var $distance = element.find('.distance');
        var applyAnimation = function () {
          var st = $windowElement.scrollTop();
          var windowHeight = $windowElement.height();
          var breakingUp = windowHeight - element.offset().top;
          breakingUp -= Math.floor(windowHeight/4);
          
          if (breakingUp + st <= 0) {
            scope.y = 0;
            $distance.hide();
          } else if (breakingUp + st < scope.height) {
            scope.y = breakingUp + st;
            $distance.show();
          } else {
            scope.y = scope.height;
            $distance.hide();
          }
          
          var x;
          if (scope.y === 0 || scope.y === scope.height) {
            x = width / 2;
          } else if (typeof xMap[scope.y] !== 'undefined') {
            x = xMap[scope.y];
          }
          
          if (typeof x !== 'undefined') {
            $vehicle.css({top: scope.y - $vehicle.outerHeight(true) / 2, left: x - $vehicle.outerWidth(true) / 2});
          }
        };
        
        $windowElement.on('scroll', function () {
          applyAnimation();
          scope.$apply(function () {
            scope.currentDistance = Math.round(scope.y/scope.height * scope.distance);
          });
        });
        applyAnimation();
      },
      replace: true
    };
  });
