'use strict';

/**
 * @ngdoc directive
 * @name co2poApp.directive:trip
 * @description
 * # trip
 */
angular.module('co2poApp')
  .directive('trip', function () {
    var width = 200; //hardcoded width
    var inc = 200;
    
    return {
      scope: { distance: '@' },
      templateUrl: 'views/directives/trip.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        //get height
        var iterations = Math.floor(scope.distance / 100);
        scope.height = (2 + iterations) * inc;
        
        
        element.height(scope.height);
        var canvas = angular.element('<canvas id="trip-canvas" />')[0];
        element.append(canvas);
        
        canvas.height = scope.height;
        
        canvas.width = width;
        var context = canvas.getContext('2d');
        
        context.lineWidth = 10;
        context.strokeStyle = "red";
        
        function drawSpring (context) {
          context.beginPath();
          
          //first
          var offset = 0;
          var x0 = width/2, y0 = 0;
          var x1 = width/2 + Math.random() * width/2, y1 = inc/2;
          var x2 = width/2 - Math.random() * width/2, y2 = inc/2+10;
          var x3 = width/4 + Math.random() * width/2, y3 = inc;
          context.beginPath();
          context.moveTo(width / 2, 0);
          context.bezierCurveTo(x1, y1, x2, y2, x3, y3);
          context.stroke();
          
          console.log(offset);
          
          var colors = ['blue', 'red'];
          for (var i = 0; i < iterations; i++) {
            context.strokeStyle = colors[i%2];
            
            context.beginPath();
            context.moveTo(x3, y3);
            x1 = x3 + (x3-x2);
            y1 = y3 + (y3-y2);
            
            x2 = width/2 - Math.random() * width/2;
            x3 = width/4 + Math.random() * width/2;
            
            y2 += inc;
            y3 += inc;
            context.bezierCurveTo(x1, y1, x2, y2, x3, y3);
            context.stroke();
            console.log(offset);
          }
          /*
          //1
          context.strokeStyle = "blue";
          context.beginPath();
          context.moveTo(x3, y3);
          x1 = x3 + (x3-x2);
          y1 = y3 + (y3-y2);
          
          x2 = width/2 - Math.random() * width/2;
          x3 = width/4 + Math.random() * width/2;
          
          y2 += inc;
          y3 += inc;
          context.bezierCurveTo(x1, y1, x2, y2, x3, y3);
          context.stroke();
          console.log(offset);
          
          //2
          context.strokeStyle = "red";
          context.beginPath();
          context.moveTo(x3, y3);
          x1 = x3 + (x3-x2);
          y1 = y3 + (y3-y2);
          
          x2 = width/2 - Math.random() * width/2;
          x3 = width/4 + Math.random() * width/2;
          
          y2 += inc;
          y3 += inc;
          context.bezierCurveTo(x1, y1, x2, y2, x3, y3);
          context.stroke();
          console.log(offset);
          */
          
          //last
          context.strokeStyle = "blue";
          context.beginPath();
          context.moveTo(x3, y3);
          x1 = x3 + (x3-x2);
          y1 = y3 + (y3-y2);
          
          x2 = width/2 - Math.random() * width/2;
          x3 = width/2;
          
          y2 += inc;
          y3 += inc;
          context.bezierCurveTo(x1, y1, x2, y2, x3, y3);
          context.stroke();
        }
        
        drawSpring(context);
        
        
      },
      replace: true
    };
  });
