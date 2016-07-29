const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  _move(from, to) {
    this.fs.move(this.destinationPath(from), this.destinationPath(to));
  }

  prompting() {
    const done = this.async();
    const prompts = [
      {
        type: 'list',
        name: 'codecov',
        message: 'Choose a code coverage',
        choices: ['travis-ci', 'none'],
        default: 'travis-ci',
      },
    ];
    this.prompt(prompts).then(answers => {
      this.codecov = answers.codecov;
      done();
    });
  }

  configuring() {
    switch (this.codecov.toLowerCase()) {
      case 'travis-ci':
        this.composeWith('vu:codecov-travis-ci');
        break;
      default:
        // do nothing...
        break;
    }
  }

}
