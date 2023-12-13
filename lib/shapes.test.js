require('../lib/jest.config');

// Test the spawnSVG functionality
test('A logo should be generated with these params.', () => {
    const result = spawnSVG({
      text: 'Test Text',
      textColor: 'black',
      shape: 'circle',
      shapeColor: 'red',
    });
  
    // Check the results 
    expect(result).toContain('<circle');
    expect(result).toContain('Test Text');
    expect(result).toContain('fill="red"');
  });