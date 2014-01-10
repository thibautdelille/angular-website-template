'use strict';

describe("Portfolio", function () {
  var ptor = protractor.getInstance();

  describe("Projects", function () {
    beforeEach(function() {
      ptor.get('/#');
    });
    it("should display the correct title", function () {
      expect(ptor.getTitle()).toBe('Thibaut Delille');
    });

    it("should find 4 projects", function () {
      browser.findElements(by.css('.project')).then(function(arr) {
        expect(arr.length).toEqual(4);
      });
    });
    it("should filter the project", function(){
      element(by.model('query')).sendKeys('pok');
      browser.findElements(by.css('.project')).then(function(arr) {
        expect(arr.length).toEqual(2);
      });
    });
    it('should be possible to control phone order via the drop down select box', function() {
      element(by.model('orderProp')).sendKeys('name');
      browser.findElements(by.css('.project h2')).then(function(arr) {
        expect(arr[1].getText()).toEqual("Josephine and Thibaut Wedding Website");
      });
    });
    it('should render project specific links', function() {
      element(by.model('query')).sendKeys('publictones');
      element(by.css('.project a')).click();
      expect(ptor.getCurrentUrl()).toBe('http://localhost:9000/#/projects/publictones');
    });
  });
  describe("Project Page", function () {
    beforeEach(function() {
      ptor.get('/#/projects/publictones');
    });

    it('should display placeholder page with phoneId', function() {
      expect(element(by.binding('projectId')).getText()).toBe('publictones');
    });
  });
});
