'use strict';

describe('filter', function () {

  // load the filter's module
  beforeEach(module('thibautdelilleApp'));

  // test the reverse filter
  describe('reverse', function(){
    it('should reverse a string', inject(function(reverseFilter){
      expect(reverseFilter('ABCD')).toEqual('DCBA');
    }));
  });
});
