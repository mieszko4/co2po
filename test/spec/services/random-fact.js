'use strict';

describe('Service: randomFact', function () {

  // load the service's module
  beforeEach(module('co2poApp'));

  // instantiate service
  var randomFact;
  beforeEach(inject(function (_randomFact_) {
    randomFact = _randomFact_;
  }));

  it('should do something', function () {
    expect(!!randomFact).toBe(true);
  });

});
