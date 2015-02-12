/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'tomster-cli',
  contentFor: function(type, config) {
    var content = [];
    if ( type === 'head' ) {
      content.push('<link href="/assets/images/tomster_cli.png" type="image/x-icon">');
    }
    return content.join('\n');
  },
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
