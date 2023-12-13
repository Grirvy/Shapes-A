const questions = [
    {
      type: 'input',
      name: 'text',
      message: 'What text do you want?',
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'What color do you want the text?',
    },
    {
      type: 'select',
      name: 'shape',
      message: 'What shape do you want?',
      choices: ['Circle', 'Square', 'Triangle'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'What color do you want the shape?',
    },
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Are you sure?',
      initial: true,
    },
];

module.exports = questions;