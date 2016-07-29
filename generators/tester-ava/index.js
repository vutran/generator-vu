const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  install() {
    this.npmInstall(['ava'], { saveDev: true });
  }

  writing() {
    const data = {
      scripts: {
        test: "npm run lint && ava"
      },
    };
    this.fs.extendJSON(this.destinationPath('package.json'), data);
  }

}
