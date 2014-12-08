'use strict';

/**
 * @ngdoc service
 * @name co2poApp.Firebase
 * @description
 * # Firebase
 * Factory in the co2poApp.
 */
angular.module('co2poApp')
  .factory('Firebase', function ($window) {
    if (typeof($window.Firebase) === 'undefined') {
      return;
    }
    
    var fbDecisions = new $window.Firebase('https://intense-torch-5763.firebaseio.com/decisions');
    var fbCountPeople = new $window.Firebase('https://intense-torch-5763.firebaseio.com/countPeople');
    var fbCountCo2 = new $window.Firebase('https://intense-torch-5763.firebaseio.com/countCo2');
    
    var $mindChangers = angular.element('#mind-changers');
    $mindChangers.show();
    fbCountPeople.on('value', function (snapshot) {
      $mindChangers.find('.count-people').html(snapshot.val());
    });
    
    fbCountCo2.on('value', function (snapshot) {
      $mindChangers.find('.count-co2').html(snapshot.val());
    });
    
    return {
      saveDecision: function (chosen, minimum, yes) {
        fbDecisions.push({
          chosen: {
            distance: chosen.distance,
            co2: chosen.co2,
          },
          minimum: {
            distance: minimum.distance,
            co2: minimum.co2,
          },
          changedMind: yes
        });
        
        if (yes) {
          fbCountPeople.transaction(function (currentValue) {
            return (currentValue || 0) + 1;
          });
          
          fbCountCo2.transaction(function (currentValue) {
            return (currentValue || 0) + (chosen.co2 - minimum.co2);
          });
        }
      }
    };
  });
