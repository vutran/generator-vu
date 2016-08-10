const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  constructor(a, b) {
    super(a, b);
    this.option('linter', {
      desc: 'Choose a linter',
      default: 'eslint',
    });
  }

  configuring() {
    switch (this.options.linter.toLowerCase()) {
      case 'eslint':
        this.composeWith('vu:linter-eslint', { options: this.options });
        break;
      case 'xo':
        this.composeWith('vu:linter-xo', { options: this.options });
        break;
      default:
        // do nothing...
        break;
    }
  }

  writing() {
    const data = {
      scripts: {
        lint: ':',
      },
    };
    this.fs.extendJSON(this.destinationPath('package.json'), data);
  }

}
