const path = require('path');
const yeoman = require('yeoman-generator');
const username = require('username');

module.exports = class extends yeoman.Base {

  constructor(a, b) {
    super(a, b);
    this.option('name', {
      desc: 'Specify your project name',
    });
    this.option('fullName', {
      desc: 'Specify your full name',
    });
    this.option('email', {
      desc: 'Specify your email address',
    });
    this.option('githubUsername', {
      desc: 'Specify your GitHub username',
    });
    this.option('license', {
      desc: 'Set a license for your project',
    });
    this.option('linter', {
      desc: 'Use a linting framework',
    });
    this.option('tester', {
      desc: 'Use a test runner/framework',
    });
    this.option('ci', {
      desc: 'Use continuous integration service',
    });
  }

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
        choices: ['MIT', 'Apache-2.0', 'BSD-3-Clause', 'EPL-1.0', 'GPL-2.0', 'GPL-3.0', 'AGPL-3.0', 'LGPL-2.1', 'LGPL-3.0', 'FDL-1.3', 'MPL-2.0', 'ISC', 'CDDL-1.0', 'UNLICENSED'],
        default: 'MIT',
      },
      {
        type: 'list',
        name: 'linter',
        message: 'Choose a linter',
        choices: ['eslint', 'xo', 'none'],
        default: 'eslint',
      },
      {
        type: 'list',
        name: 'tester',
        message: 'Choose a test runner',
        choices: ['ava', 'jest', 'none'],
        default: 'jest',
      },
      {
        type: 'list',
        name: 'ci',
        message: 'Choose a continuous integration service',
        choices: ['travis-ci', 'none'],
        default: 'travis-ci',
      },
    ]).then(answers => {
      this.options = answers;
      done();
    });
  }

  init() {
    this.composeWith('vu:templates', { options: this.options });
    this.composeWith('vu:license', { options: this.options });
    this.composeWith('vu:linter', { options: this.options });
    this.composeWith('vu:tester', { options: this.options });
    this.composeWith('vu:ci', { options: this.options });
  }

}
