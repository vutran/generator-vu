const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  constructor(a, b) {
    super(a, b);
    this.option('license', {
      desc: 'Choose a license',
      default: 'MIT',
    });
  }

  writing() {
    if (this.options.license !== 'UNLICENSED') {
      this.fs.copyTpl(
        this.templatePath(`${this.options.license}.txt`),
        this.destinationPath('LICENSE'),
        this.options
      );
    }
  }

}
