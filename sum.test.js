const { stringLength, reverseString } = require('./sum');

test('stringLength should return the correct character count', () => {
    const result = stringLength("hello");
    expect(result).toBe(5);
});
  
test('stringLength should throw an error for an empty string', () => {
    expect(() => {
      stringLength("");
    }).toThrow("String length must be between 1 and 10 characters.");
});
  
test('stringLength should throw an error for a string longer than 10 characters', () => {
    expect(() => {
      stringLength("thisisaverylongstring");
    }).toThrow("String length must be between 1 and 10 characters.");
});


test('reverseString should return the reverse string', () => {
  const result = reverseString("hello");
  expect(result).toBe("olleh");
});