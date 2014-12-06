'use strict';

/**
 * @ngdoc service
 * @name co2poApp.Vehicle
 * @description
 * # Vehicle
 * Factory in the co2poApp.
 */
angular.module('co2poApp')
  .factory('Vehicle', function () {
    var vehicles = [
      {
        name: 'Car',
        type: 'car'
      },
      {
        name: 'Bus',
        type: 'bus'
      },
      {
        name: 'Train/Tram/Subway',
        type: 'train-tram-subway'
      },
      {
        name: 'Motorcycle',
        type: 'motorcycle'
      },
      {
        name: 'Airplane',
        type: 'airplane'
      },
      {
        name: 'Ferry',
        type: 'ferry'
      }
    ];
    
    var service = {
      vehicles: vehicles,
      getCO2: function (distance) {
        var co2s = [];
        angular.forEach(vehicles, function (vehicle) {
          co2s.push({
            vehicle: vehicle,
            co2: Math.random() * distance //TODO: real data
          });
        });
        
        return co2s;
      }
    };
    
    return service;
  });
