const questions = [
    {
      type: 'input',
      name: 'color',
      message: 'What color do you want the text?',
    },
    {
      type: 'select',
      name: 'logo',
      message: 'What logo do you want?',
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      name: 'logo color',
      message: 'What color do you want the logo?',

    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure?',
      initial: true,
    },
];

module.exports = questions;