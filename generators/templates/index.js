const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  writing() {
    // copies files
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationRoot(),
      this.options
    );
  }

}
