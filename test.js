'use strict';

require('mocha');
var assert = require('assert');
var extRegex = require('./');

describe('ext-to-regex', function() {
  it('should export a function', function() {
    assert.equal(typeof extRegex, 'function');
  });

  it('should convert a string to a regex', function() {
    assert.deepEqual(extRegex('.js'), /\.js$/);
    assert.deepEqual(extRegex('js'), /\.js$/);
    assert.deepEqual(extRegex('.coffee.js'), /\.coffee\.js$/);
    assert.deepEqual(extRegex('coffee.js'), /\.coffee\.js$/);
  });

  it('should convert an array to a regex', function() {
    assert.deepEqual(extRegex(['.js', '.md']), /\.(?:js|md)$/);
    assert.deepEqual(extRegex(['js', '.md']), /\.(?:js|md)$/);
    assert.deepEqual(extRegex(['js', 'md', 'coffee.js']), /\.(?:js|md|coffee\.js)$/);
    assert.deepEqual(extRegex(['js', 'md', '.coffee.js']), /\.(?:js|md|coffee\.js)$/);
  });

  it('should throw an error when invalid args are passed', function(cb) {
    try {
      extRegex();
      cb(new Error('expected an error'));
    } catch (err) {
      assert(err);
      assert.equal(err.message, 'expected a string or array');
      cb();
    }
  });
});
