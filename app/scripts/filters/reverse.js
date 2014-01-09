'use strict';

angular.module('thibautdelilleApp')
  .filter('reverse', function() {
    return function(text) {
      return text.split('').reverse().join('');
    };
  });
