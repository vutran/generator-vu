const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  configuring() {
    switch (this.options.tester.toLowerCase()) {
      case 'ava':
        this.composeWith('vu:tester-ava');
        break;
    }
  }

}
