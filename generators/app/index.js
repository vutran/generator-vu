const yeoman = require('yeoman-generator');
const username = require('username');

module.exports = class extends yeoman.Base {

  prompting() {
    this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname,
      },
      {
        type: 'input',
        name: 'fullName',
        message: 'What is your full name?',
        default: 'Vu Tran',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        default: 'vu@vu-tran.com',
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
      {
        type: 'list',
        name: 'linter',
        message: 'Choose a linter',
        choices: ['xo'],
        default: 'xo',
      },
      {
        type: 'list',
        name: 'tester',
        message: 'Choose a testing framework',
        choices: ['ava'],
        default: 'ava',
      },
    ]).then(this._process.bind(this));
  }

  /**
   * Processes the options
   *
   * @param {Object} options
   * @private
   */
  _process(options) {
    this.composeWith('vu:linter', { options });
    this.composeWith('vu:tester', { options });
    this.composeWith('vu:license', { options });
    this.composeWith('vu:templates', { options });
  }

}
