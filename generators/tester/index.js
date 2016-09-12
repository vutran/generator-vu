const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  constructor(a, b) {
    super(a, b);
    this.option('tester', {
      desc: 'Choose a test runner',
      default: 'ava',
    });
  }

  configuring() {
    switch (this.options.tester.toLowerCase()) {
      case 'ava':
        this.composeWith('vu:tester-ava');
        break;
      case 'jest':
        this.composeWith('vu:tester-jest');
        break;
      default:
        // do nothing...
        break;
    }
  }

  writing() {
    const data = {
      scripts: {
        test: ":"
      },
    };
    this.fs.extendJSON(this.destinationPath('package.json'), data);
  }

}
