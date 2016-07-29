const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  install() {
    this.npmInstall(['xo'], { saveDev: true });
  }

  end() {
    this.spawnCommand('xo', ['--init']);
  }

}
