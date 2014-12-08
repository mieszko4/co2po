'use strict';

/**
 * @ngdoc function
 * @name co2poApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the co2poApp
 */
angular.module('co2poApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.users = [
      {
        name: 'Miłosz Chmura',
        image: ''
      },
      {
        name: 'Anamarija Mišmaš',
        image: ''
      },
      {
        name: 'Tea Pavić',
        image: ''
      },
      {
        name: 'Martina Petraš',
        image: ''
      },
    ];

    $scope.goal = {
        text: 'Motivate user in a fun way to use means of transport<br>that emitts at least carbon dioxside in the athmosphere.'
    };

    $scope.kodingHastag = {
        name: '#koding',
        link: 'https://twitter.com/koding'
    };

    $scope.hackatonHastag = {
        name: '#hackaton',
        link: 'https://twitter.com/hashtag/hackathon'
    };
  });

