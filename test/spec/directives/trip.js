'use strict';

describe('Directive: trip', function () {

  // load the directive's module
  beforeEach(module('co2poApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<trip></trip>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the trip directive');
  }));
});
