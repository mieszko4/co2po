'use strict';

/**
 * @ngdoc service
 * @name co2poApp.randomFact
 * @description
 * # randomFact
 * Factory in the co2poApp.
 */
angular.module('co2poApp')
  .factory('randomFact', function ($resource, $q) {
    var api = 'https://www.googleapis.com/freebase/v1/';

    var messages = [
        {
            text: 'You will save 0.024 * {{emissionSaved}} treese',
            image: '../images/path_icons/treese.png'
        },
        {
            text: 'You will save 0.435 * {{emissionSaved}} liters of petrol',
            image: '../images/path_icons/petrol.png'
        },
        {
            text: 'You will reduce carbon emission equivalent of eating 2025 * {{emissionSaved}} kilos of steak per year',
            image: '../images/path_icons/steak.png'
        },
        {
            text: 'You will reduce carbon emission equivalent of 2.4 * {{emissionSaved}} dollars of clothes',
            image: '../images/path_icons/clothes.png'
        },
        {
            text: 'By spending 2 hours per week between the sheets you annualy save 900 kilos of CO2. Make love not CO2 <3',
            image: '../images/path_icons/kissing.png'
        },
        {
            text: 'Sea level rose 17 centimeters over the last century',
            image: '../images/path_icons/ship.png'
        },
        {
            text: 'Greenland and Antarctica are losing 500 cubic kilometers of ice per year',
            image: '../images/path_icons/ice.png'
        }
    ];

    var counter = 0;

    var service = {
      getFact: function (term) {

        if(counter < messages.length) {
            var deferred = $q.defer();
            deferred.resolve(messages[counter]);
            counter++;
            return deferred.promise;
        }

        var searchResource = $resource(api + 'mqlread');
        return searchResource.get({
            query: JSON.stringify([{
                'id': null,
                'name': null,
                'name~=': term,
                '/common/topic/article': [{ 'text': null}]
            }])
        }).$promise.then(function (data) {
                //@todo what to return when nothing found
            if(data.result.length > 0) {
                var topicArrayKey = Math.floor(Math.random() * data.result.length);
                var mid = data.result[topicArrayKey].id;
                var fact = {};

                var topicResource = $resource(api + 'topic' + mid);
                return topicResource.get({lang: 'en', limit: '1'}).$promise.then(function (data) {
                    fact.text = data.property['/common/topic/article'].values[0].text;
                    return fact;
                });
            }
            });
    }};
        return service;
  });