const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  _move(from, to) {
    this.fs.move(this.destinationPath(from), this.destinationPath(to));
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationRoot(),
      this.options
    );
    this._move('travis.yml', '.travis.yml');
  }

}
