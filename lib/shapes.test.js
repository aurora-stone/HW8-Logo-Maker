const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
  test('render method should return the correct SVG string', () => {
    const shape = new Triangle();
    shape.setColor('blue');
    expect(shape.render(300, 200, 'ABC', 'white')).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0,200 150,0 300,200" fill="blue" />\n<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white">ABC</text></svg>'
    );
  });
});

describe('Circle', () => {
  test('render method should return the correct SVG string', () => {
    const shape = new Circle();
    shape.setColor('red');
    expect(shape.render(300, 200, 'XYZ', 'black')).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="red" />\n<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="black">XYZ</text></svg>'
    );
  });
});

describe('Square', () => {
  test('render method should return the correct SVG string', () => {
    const shape = new Square();
    shape.setColor('green');
    expect(shape.render(300, 200, '123', 'yellow')).toEqual(
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="200" fill="green" />\n<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="yellow">123</text></svg>'
    );
  });
});
