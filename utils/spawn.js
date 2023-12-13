function spawnSVG({ text, textColor, shape, shapeColor }) {
    let shapeSvg;
  
    // Add shape rendering logic
      if ((/circle/i).test(shape)) {
        shapeSvg = `<circle cx="150" cy="100" r="80" fill="${shapeColor}" />`;
  
      } else if ((/square/i).test(shape)) {
        shapeSvg = `<rect x="70" y="20" width="160" height="160" fill="${shapeColor}" />`;
  
      } else if ((/triangle/i).test(shape)) {
        shapeSvg = `<polygon points="150,20 230,180 70,180" fill="${shapeColor}" />`;
  
      } else {
        shapeSvg = ''; // Return empty string if unknown shape
  
      }
      // This is the information that will be written to the svg file when created
    const svgSpawn = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeSvg}
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
      </svg>`;
  
    return svgSpawn;
};

module.exports = spawnSVG;