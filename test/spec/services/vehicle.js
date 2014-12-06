'use strict';

describe('Service: Vehicle', function () {

  // load the service's module
  beforeEach(module('co2poApp'));

  // instantiate service
  var Vehicle;
  beforeEach(inject(function (_Vehicle_) {
    Vehicle = _Vehicle_;
  }));

  it('should do something', function () {
    expect(!!Vehicle).toBe(true);
  });

});
