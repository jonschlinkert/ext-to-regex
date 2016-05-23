/*!
 * ext-to-regex (https://github.com/jonschlinkert/ext-to-regex)
 *
 * Copyright (c) 2016, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var cache = {};

module.exports = function(exts) {
  var key = String(exts);
  if (cache.hasOwnProperty(key)) {
    return cache[key];
  }

  if (typeof exts === 'string') {
    exts = formatExt(exts);
  } else if (Array.isArray(exts)) {
    exts = '(?:' + exts.map(formatExt).join('|') + ')';
  } else {
    throw new TypeError('expected a string or array');
  }

  return (cache[key] = new RegExp('\\.' + exts + '$'));
};

function formatExt(str) {
  // strip leading dots, since we re-add this in the regex
  if (str.charAt(0) === '.') str = str.slice(1);
  // escape dots inside multi-extensions, like `.coffee.js`
  return str.split('.').join('\\.');
}
