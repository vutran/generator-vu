const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  _move(from, to) {
    this.fs.move(this.destinationPath(from), this.destinationPath(to));
  }

  install() {
    this.npmInstall(['eslint', 'eslint-plugin-import', 'eslint-config-airbnb-base'], { saveDev: true });
  }

  writing() {
    // copies files
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationRoot(),
      this.options
    );
    // move dot files
    this._move('eslintrc', '.eslintrc');
    // add lint script
    const data = {
      scripts: {
        lint: "eslint ."
      },
    };
    this.fs.extendJSON(this.destinationPath('package.json'), data);
  }

}
