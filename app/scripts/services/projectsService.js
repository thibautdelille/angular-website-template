'use strict';

/* Services */

var thibautdelilleServices = angular.module('thibautdelilleServices', ['ngResource']);

thibautdelilleServices.factory('Project', ['$resource',
  function($resource){
    return $resource('projects/:phoneId.json', {}, {
      query: {method:'GET', params:{projectId:'projects'}, isArray:true}
    });
  }]);
