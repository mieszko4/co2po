'use strict';

describe('Directive: randomFact', function () {

  // load the directive's module
  beforeEach(module('co2poApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should be empty', inject(function ($compile) {
    element = angular.element('<random-fact></random-fact>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
