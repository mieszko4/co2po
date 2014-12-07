'use strict';

describe('Directive: share', function () {

  // load the directive's module
  beforeEach(module('co2poApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should be empty', inject(function ($compile) {
    element = angular.element('<share></share>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
