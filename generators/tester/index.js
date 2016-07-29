const yeoman = require('yeoman-generator');

module.exports = class extends yeoman.Base {

  prompting() {
    const done = this.async();
    const prompts = [
      {
        type: 'list',
        name: 'tester',
        message: 'Choose a testing framework',
        choices: ['ava', 'none'],
        default: 'ava',
      },
    ];
    this.prompt(prompts).then(answers => {
      this.tester = answers.tester;
      done();
    });
  }

  configuring() {
    switch (this.tester.toLowerCase()) {
      case 'ava':
        this.composeWith('vu:tester-ava');
        break;
      default:
        // do nothing...
        break;
    }
  }

  writing() {
    const data = {
      scripts: {
        test: ":"
      },
    };
    this.fs.extendJSON(this.destinationPath('package.json'), data);
  }

}
