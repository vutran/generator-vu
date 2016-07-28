const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  install() {
    this.npmInstall(['ava'], { saveDev: true });
  }

  end() {
    this.spawnCommand('ava', ['--init']);
  }

}
