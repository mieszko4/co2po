'use strict';

/**
 * @ngdoc service
 * @name co2poApp.randomFact
 * @description
 * # randomFact
 * Factory in the co2poApp.
 */
angular.module('co2poApp')
  .factory('randomFact', function () {
    var service = {
      getFact: function (term) {
        return 'Random fact for ' + term;
      }
    };
    
    return service;
  });
