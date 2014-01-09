'use strict';

describe("homepage", function () {
  var ptor = protractor.getInstance();

  describe("index", function () {
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
    })
  });
});
