(function() {
  'use strict';

  const isThere = require('is-there');
  const path    = require('path');

  function isGit(dir) {
    let gitDir = path.join(dir, '.git');

    return isThere(gitDir);
  }

  module.exports = exports = isGit;
})();
