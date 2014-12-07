'use strict';

describe('Service: volvoCo2', function () {

  // load the service's module
  beforeEach(module('co2poApp'));

  // instantiate service
  var volvoCo2;
  beforeEach(inject(function (_volvoCo2_) {
    volvoCo2 = _volvoCo2_;
  }));

  it('should do something', function () {
    expect(!!volvoCo2).toBe(true);
  });

});
