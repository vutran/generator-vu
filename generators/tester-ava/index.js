const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  install() {
    this.npmInstall(['ava'], { saveDev: true });
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
        test: "npm run lint && ava"
      },
    };
    this.fs.extendJSON(this.destinationPath('package.json'), data);
  }

}
