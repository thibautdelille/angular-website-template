'use strict';

describe('Controller: ProjectsCtrl', function () {

  // load the controller's module
  beforeEach(module('thibautdelilleApp'));

  var ProjectsCtrl,
    scope,
    $httpBackend;

  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('data/projects.json').
        respond([{name: 'Project 1'}, {name: 'Project 2'}]);

    scope = $rootScope.$new();
    ProjectsCtrl = $controller('ProjectsCtrl', {$scope: scope});
  }));


  it('should create "projects" model with 2 projects fetched from xhr', function() {
    expect(scope.projects).toBeUndefined();
    $httpBackend.flush();

    expect(scope.projects).toEqual([{name: 'Project 1'}, {name: 'Project 2'}]);
  });

  it('should set the default value of orderProp model', function() {
    expect(scope.orderProp).toBe('age');
  });
});
