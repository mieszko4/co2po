'use strict';

/**
 * @ngdoc overview
 * @name co2poApp
 * @description
 * # co2poApp
 *
 * Main module of the application.
 */
angular
  .module('co2poApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.bootstrap',
    'ngTouch',
    'google.places'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
