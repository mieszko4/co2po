'use strict';

describe('Controller: AboutCtrl', function () {

  // load the controller's module
  beforeEach(module('co2poApp'));

  var AboutCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AboutCtrl = $controller('AboutCtrl', {
      $scope: scope
    });
  }));

  it('should have users in the scope', function () {
    expect(scope.users).not.toBe(undefined);
  });
});
