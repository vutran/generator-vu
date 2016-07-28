const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  writing() {
    if (this.options.license !== 'unlicensed') {
      // copies license
      this.fs.copyTpl(
        this.templatePath(`${this.options.license}.txt`),
        this.destinationPath('LICENSE'),
        this.options
      );
    }
  }

}
