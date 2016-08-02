const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  constructor(a, b) {
    super(a, b);
    this.option('codecov', {
      desc: 'Choose a code coverage',
      default: 'travis-ci',
    });
  }

  _move(from, to) {
    this.fs.move(this.destinationPath(from), this.destinationPath(to));
  }

  configuring() {
    switch (this.options.codecov.toLowerCase()) {
      case 'travis-ci':
        this.composeWith('vu:codecov-travis-ci');
        break;
      default:
        // do nothing...
        break;
    }
  }

}
