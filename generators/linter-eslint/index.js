const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  _move(from, to) {
    this.fs.move(this.destinationPath(from), this.destinationPath(to));
  }

  install() {
    const pkgs = ['eslint', 'eslint-plugin-import', 'eslint-config-airbnb-base'];
    if (this.options.tester === 'ava') {
      pkgs.push('eslint-plugin-ava');
    }
    this.npmInstall(pkgs, { saveDev: true });
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

    // set linter base config
    const eslintConfig = {
      extends: ['airbnb-base'],
      plugins: [],
    };
    if (this.options.tester === 'ava') {
      eslintConfig.extends.push('plugin:ava/recommended');
      eslintConfig.plugins.push('ava');
    }
    this.fs.extendJSON(this.destinationPath('.eslintrc'), eslintConfig);
  }

}
