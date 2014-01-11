'use strict';

angular.module('thibautdelilleApp')
  .directive('markdown', function () {
    var converter = new Showdown.converter();
    return {
      restrict: 'E',
      link:function(scope, element, attrs){
        console.log(attrs);
        if (attrs.content) {
          scope.$watch(attrs.content, function (newVal) {
            var html = newVal ? converter.makeHtml(newVal) : '';
            element.html(html);
          });
        } else {
          var htmlText = converter.makeHtml(element.text());
          element.html(htmlText);
        }
      }
    };
  });
