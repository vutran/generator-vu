const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  prompting() {
    const done = this.async();
    const prompts = [
      {
        type: 'list',
        name: 'linter',
        message: 'Choose a linter',
        choices: ['xo'],
        default: 'xo',
      },
    ];
    this.prompt(prompts).then(answers => {
      this.linter = answers.linter;
      done();
    });
  }

  configuring() {
    switch (this.linter.toLowerCase()) {
      case 'xo':
        this.composeWith('vu:linter-xo');
        break;
    }
  }

}
