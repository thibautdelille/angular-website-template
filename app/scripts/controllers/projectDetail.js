'use strict';

angular.module('thibautdelilleApp')
  .controller('ProjectDetailCtrl', ['$scope', '$routeParams', '$http',
    function($scope, $routeParams, $http) {
      $http.get('data/' + $routeParams.projectId + '.json').success(function(data) {
        $scope.project = data;
      });
    }
  ]);
