'use strict';

angular.module('thibautdelilleApp')
  .controller('ProjectsCtrl', ['$scope', 'Project', function($scope, Project) {
    $scope.projects = Project.query();
    $scope.orderProp = 'age';
  }]);
