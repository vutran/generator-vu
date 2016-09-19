const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  _move(from, to) {
    this.fs.move(this.destinationPath(from), this.destinationPath(to));
  }

  install() {
    this.npmInstall(['jest', 'babel-preset-es2015', 'babel-polyfill'], { saveDev: true });
  }

  writing() {
    // copies files
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationRoot(),
      this.options
    );
    const data = {
      scripts: {
        test: "npm run lint && jest"
      },
    };
    this.fs.extendJSON(this.destinationPath('package.json'), data);
    // move dot files
    this._move('babelrc', '.babelrc');
    this._move('__tests__/eslintrc', '__tests__/.eslintrc');
  }

}
