const { stringLength, reverseString ,Calculator ,capitalize} = require('./sum');

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


describe('Calculator', () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add method', () => {
    test('should add two numbers correctly', () => {
      const result = calculator.add(2, 3);
      expect(result).toBe(5);
    });
  });

  describe('subtract method', () => {
    test('should subtract two numbers correctly', () => {
      const result = calculator.subtract(5, 3);
      expect(result).toBe(2);
    });
  });

  describe('multiply method', () => {
    test('should multiply two numbers correctly', () => {
      const result = calculator.multiply(2, 3);
      expect(result).toBe(6);
    });
  });

  describe('divide method', () => {
    test('should divide two numbers correctly', () => {
      const result = calculator.divide(6, 3);
      expect(result).toBe(2);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => {
        calculator.divide(5, 0);
      }).toThrow("Cannot divide by zero.");
    });
  });
});

test('capitalize should capitalize the first character of the string', () => {
    const result = capitalize('hello');
    expect(result).toBe('Hello');
  });