'use strict';

/**
 * @ngdoc service
 * @name co2poApp.Vehicle
 * @description
 * # Vehicle
 * Factory in the co2poApp.
 */
angular.module('co2poApp')
  .factory('Vehicle', function (volvoCo2) {
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
    
    var volvoMappings = {
      car: 'Car, medium',
      bus: 'Bus',
      'train-tram-subway': 'Train, Subway',
      motorcycle: 'Two-wheeler',
      ferry: 'Ferry',
      airplane: 'Aircraft'
    };
    
    var getEmission = function (vehicle, emissions) {
      var foundEmission = null;
      angular.forEach(emissions, function (emission) {
        if (emission.transportName === volvoMappings[vehicle.type]) {
          foundEmission = emission;
        }
      });
      
      return foundEmission;
    };
    
    var service = {
      vehicles: vehicles,
      getCO2: function (origin, destination) {
        return volvoCo2.getEmission(origin, destination).then(function (emissions) {
          var co2s = [];
          angular.forEach(vehicles, function (vehicle) {
            var emission = getEmission(vehicle, emissions);
            
            co2s.push({
              vehicle: vehicle,
              co2: emission.totalCo2,
              distance: emission.routedDistance
            });
          });
          
          return co2s;
        });
      }
    };
    
    return service;
  });
