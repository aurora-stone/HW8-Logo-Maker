const inquirer = require('inquirer');
const fs = require('fs');
const {Triangle, Circle, Square} = require('./lib/shapes');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Please enter up to three letters:',
      validate: (input) => {
        if (input.length > 3) {
          return 'You typed more than three letters.';
        }
        return true;
      },
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Please enter your desired text color:',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Please choose your shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Please enter your desired shape color:',
    },
  ])
  .then((answers) => {
    // Create the SVG file
    const shape = createShape(answers.shape);
    shape.setColor(answers.shapeColor);
    const svgContent = shape.render(300, 200, answers.text, answers.textColor);
    fs.writeFileSync('./examples/logo.svg', svgContent);

    console.log('Generated logo.svg');
  })
  .catch((error) => {
    console.error('Error:', error);
  });


function createShape(shapeType) {
  switch (shapeType) {
    case 'circle':
      return new Circle();
    case 'triangle':
      return new Triangle();
    case 'square':
      return new Square();
    default:
      throw new Error(`Unable to read shape type: ${shapeType}`);
  }
}
