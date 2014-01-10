'use strict';

angular.module('thibautdelilleApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/projects/:projectId', {
        templateUrl: 'views/project-detail.html',
        controller: 'ProjectDetailCtrl'
      })
      .otherwise({
        redirectTo: '/projects'
      });
  });
