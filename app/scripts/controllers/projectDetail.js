'use strict';

angular.module('thibautdelilleApp')
  .controller('ProjectDetailCtrl', ['$scope', '$routeParams', '$http', 'Project',
    function($scope, $routeParams, $http, Project) {
      $scope.project = Project.get({projectId: $routeParams.projectId, type:'json'});
      $scope.markdown = '';

      $http.get('data/'+$routeParams.projectId+'.md').success(function(data) {
        $scope.markdown = data;
      });
    }
  ]);
