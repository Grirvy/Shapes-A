require('./utils/depend.js');
  
  prompt(questions)
    .then((answers) => {
      console.log('\nAnswers: ', JSON.stringify(answers, null, '  '));
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    