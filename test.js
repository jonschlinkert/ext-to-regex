'use strict';

require('mocha');
var assert = require('assert');
var extRegex = require('./');

describe('ext-to-regex', function() {
  it('should export a function', function() {
    assert.equal(typeof extRegex, 'function');
  });

  it('should export an object', function() {
    assert(extRegex);
    assert.equal(typeof extRegex, 'object');
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      extRegex();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected first argument to be a string');
      assert.equal(err.message, 'expected callback to be a function');
      cb();
    }
  });
});
