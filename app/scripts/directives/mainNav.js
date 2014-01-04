'use strict';

angular.module('thibautdelilleApp')
  .directive('mainNav', function () {
    return {
      restrict: 'E',
      templateUrl: 'views/main_navigation.html'
    };
  });
