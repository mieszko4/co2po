'use strict';

/**
 * @ngdoc service
 * @name co2poApp.randomFact
 * @description
 * # randomFact
 * Factory in the co2poApp.
 */
angular.module('co2poApp')
  .factory('randomFact', function ($resource) {
    var api = 'https://www.googleapis.com/freebase/v1/';

    var service = {
      getFact: function (term) {
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

                var topicResource = $resource(api + 'topic' + mid);
                return topicResource.get({lang: 'en', limit: '1'}).$promise.then(function (data) {
                    return data.property['/common/topic/article'].values[0].text;
                });
            }
            });
    }};
        return service;
  });