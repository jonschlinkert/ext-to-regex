/*!
 * ext-to-regex (https://github.com/jonschlinkert/ext-to-regex)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var debug = require('debug')('ext-to-regex');

module.exports = function(config) {
  return function(app) {
    if (this.isRegistered('ext-to-regex')) return;
    debug('initializing "%s", from "%s"', __filename, module.parent.id);

    this.define('extRegex', function() {
      debug('running extRegex');
      
    });
  };
};
