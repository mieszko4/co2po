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
        name: 'Train',
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
      getEmission: function (vehicle, emissions) {
        var foundEmission = null;
        angular.forEach(emissions, function (emission) {
          if (emission.transportName === service.volvoMappings[vehicle.type]) {
            foundEmission = emission;
          }
        });
        
        return foundEmission;
      },
      getMinimumCo2: function (co2s) {
        var minCo2 = co2s[0];
        angular.forEach(co2s, function (co2) {
          if (co2.co2 < minCo2.co2) {
            minCo2 = co2;
          }
        });
        
        return minCo2;
      },
      getChosenCo2: function (co2s, vehicleType) {
        var chosenCo2 = null;
        angular.forEach(co2s, function (co2) {
          if (chosenCo2 === null || co2.vehicle.type === vehicleType) {
            chosenCo2 = co2;
          }
        });
        
        return chosenCo2;
      },
      volvoMappings: {
        car: 'Car, medium',
        bus: 'Bus',
        'train-tram-subway': 'Train, Subway',
        motorcycle: 'Two-wheeler',
        ferry: 'Ferry',
        airplane: 'Aircraft'
      },
      getCO2: function (origin, destination) {
        return volvoCo2.getEmission(origin, destination).then(function (emissions) {
          var co2s = [];
          angular.forEach(vehicles, function (vehicle) {
            var emission = service.getEmission(vehicle, emissions);
            
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
