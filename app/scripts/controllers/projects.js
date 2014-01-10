'use strict';

angular.module('thibautdelilleApp')
  .controller('ProjectsCtrl', function ($scope, $http) {
    $http.get('data/projects.json').success(function(data) {
      $scope.projects = data;
    });
    $scope.orderProp = 'age';
  });
