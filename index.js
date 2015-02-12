/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'tomster-cli',
  treeForPublic: function(tree) {
    var publicDir = path.join(this.project.root, 'public');
    var publicFiles = this.pickFiles(this.treeGenerator(publicDir), {
      srcDir: '/',
      destDir: '/'
    });
    if (tree) {
      return this.mergeTrees([tree, publicFiles], {overwrite: true});
    }
    else {
      return publicFiles;
    }
  },
  included: function(app) {
    app.import('vendor/app.css');
  }
};
