const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  prompting() {
    const done = this.async();
    const prompts = [
      {
        type: 'list',
        name: 'linter',
        message: 'Choose a linter',
        choices: ['eslint', 'xo', 'none'],
        default: 'eslint',
      },
    ];
    this.prompt(prompts).then(answers => {
      this.linter = answers.linter;
      done();
    });
  }

  configuring() {
    switch (this.linter.toLowerCase()) {
      case 'eslint':
        this.composeWith('vu:linter-eslint');
        break;
      case 'xo':
        this.composeWith('vu:linter-xo');
        break;
      default:
        // do nothing...
        break;
    }
  }

  writing() {
    const data = {
      scripts: {
        lint: ":"
      },
    };
    this.fs.extendJSON(this.destinationPath('package.json'), data);
  }

}
