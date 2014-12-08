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

    $scope.project = {
        goal: 'Motivate user in a fun way to use means of transport<br>that emits at least carbon dioxside in the athmosphere.',
        why: 'Greenr was developed as part of <a target="_blank" href="https://koding.com/">Koding global virtual hackaton</a>'
    };

    $scope.koding = {
        name: 'Koding',
        hastag: '#koding',
        twitterLink: 'https://twitter.com/koding',
        pageLink: 'https://koding.com/'
    };

    $scope.hackaton = {
        name: 'Hackaton',
        hastag: '#hackaton',
        twitterLink: 'https://twitter.com/hashtag/hackathon'
    };

    $scope.greenrGithub = {
        name: 'Greenr Github account',
        githubLink: 'https://github.com/mieszko4/co2po'
    };
  });

