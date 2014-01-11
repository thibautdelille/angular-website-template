'use strict';

/* Services */

var thibautdelilleServices = angular.module('thibautdelilleServices', ['ngResource']);

thibautdelilleServices.factory('Project', ['$resource',
  function($resource){
    return $resource('data/:projectId.:type', {}, {
      query: {method:'GET', params:{projectId:'projects', type:'json'}, isArray:true}
    });
  }]);
