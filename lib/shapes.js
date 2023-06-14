class Shape {
    constructor() {
      this.color = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    render(width, height, text, textColor) {
      throw new Error('No');
    }
  }
  
  class Triangle extends Shape {
    render(width, height, text, textColor) {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0,${height} ${width / 2},0 ${width},${height}" fill="${this.color}" />
<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    }
  }
  
  class Circle extends Shape {
    render(width, height, text, textColor) {
      const cx = width / 2;
      const cy = height / 2;
      const radius = Math.min(width, height) / 2;
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="${cx}" cy="${cy}" r="${radius}" fill="${this.color}" />
<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    }
  }
  
  class Square extends Shape {
    render(width, height, text, textColor) {
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="${width}" height="${height}" fill="${this.color}" />
<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${textColor}">${text}</text></svg>`;
    }
  }
  
  module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
  };
  