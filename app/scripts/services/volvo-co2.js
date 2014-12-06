'use strict';

/**
 * @ngdoc service
 * @name co2poApp.volvoCo2
 * @description
 * # volvoCo2
 * Factory in the co2poApp.
 */
angular.module('co2poApp')
  .factory('volvoCo2', function ($resource) {
    var api = '//api.commutegreener.com/api/co2/emissions';
    
    var service = {
      getEmission: function (origin, destination) {
        var emision = $resource(api, {
            callback: 'JSON_CALLBACK',
            format: 'json'
          },
          {
            get: {
            method: 'JSONP',
            isArray: false
          }
        });
        
        return emision.get({
          startLat: origin.geometry.location.lat(),
          startLng: origin.geometry.location.lng(),
          endLat: destination.geometry.location.lat(),
          endLng: destination.geometry.location.lng()
        }).$promise.then(function (result) {
          return result.emissions;
        });
      }
    };
    
    return service;
  });
