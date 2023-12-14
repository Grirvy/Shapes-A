require('./utils/depend.js');

// Prompt the user to answer questions for their logo
prompt(questions)
  .then((answers) => {
    // Call the shapes constructor function to push the users answers
    const shape = new Shapes(
      answers.text,
      answers.textColor,
      answers.shapeColor,
      answers.shape,
    );
    // Call the svg spawner function with the answers from the shapes constructor function
    const generatedLogo = spawnSVG({
      text: shape.text,
      textColor: shape.textColor,
      shape: shape.shape,
      shapeColor: shape.color,
    });
    // Create a svg file to put the logo
    fs.writeFileSync('logo.svg', generatedLogo);

    // Log that the logo has been generated
    console.log('Logo generated:\n', generatedLogo);
   })
   .catch((error) => {
     console.error('Error:', error);
   });
    