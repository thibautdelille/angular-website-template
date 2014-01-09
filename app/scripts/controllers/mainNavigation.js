'use strict';

angular.module('thibautdelilleApp')
  .controller('MainNavigationCtrl', function ($scope) {
    $scope.data = {name: 'Thibaut Delille'};
    $scope.reversedMessage = function(message){
      return message.split('').reverse().join('');
    };
  });
