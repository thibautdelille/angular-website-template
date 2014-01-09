'use strict';

angular.module('thibautdelilleApp')
  .controller('ProjectsCtrl', function ($scope) {
    $scope.projects = [
      {
        'name': 'PublicTones',
        'img': 'images/publictones.jpg',
        'url': 'http://www.publictones.com/'
      },
      {
        'name': 'Josephine and Thibaut Wedding Website',
        'img': 'images/village.jpg',
        'url': 'http://www.josephineandthibaut.com/'
      },
      {
        'name': 'Pokemon Black and White 2',
        'img': 'images/pokemon.jpg',
        'url': 'http://www.pokemonblackwhite.com/pokemon-black-and-white-2/#en-us/home'
      },
      {
        'name': 'Pokedex 3d Pro',
        'img': 'images/pokedex.jpg',
        'url': 'http://www.pokedex3d.com/'
      }
    ];
  });
