const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  constructor(a, b) {
    super(a, b);
    this.option('ci', {
      desc: 'Choose a continuous integration service',
      default: 'travis-ci',
    });
  }

  _move(from, to) {
    this.fs.move(this.destinationPath(from), this.destinationPath(to));
  }

  configuring() {
    switch (this.options.ci.toLowerCase()) {
      case 'travis-ci':
        this.composeWith('vu:ci-travis-ci');
        break;
      default:
        // do nothing...
        break;
    }
  }

}
