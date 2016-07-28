const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  configuring() {
    switch (this.options.linter.toLowerCase()) {
      case 'xo':
        this.composeWith('vu:linter-xo');
        break;
    }
  }

}
