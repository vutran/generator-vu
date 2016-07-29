const path = require('path');
const yeoman = require('yeoman-generator');
const username = require('username');

module.exports = class extends yeoman.Base {

  prompting() {
    const done = this.async();
    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: path.basename(this.destinationRoot()),
      },
      {
        type: 'input',
        name: 'fullName',
        message: 'What is your full name?',
        default: this.user.git.name(),
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: this.user.git.email(),
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
        default: username.sync(),
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license',
        choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'UNLICENSED'],
        default: 'MIT',
      },
    ]).then(answers => {
      this.answers = answers;
      done();
    });
  }

  init() {
    this.composeWith('vu:templates', { options: this.answers });
    this.composeWith('vu:license', { options: this.answers });
    this.composeWith('vu:linter', { options: this.answers });
    this.composeWith('vu:tester', { options: this.answers });
  }

}
