const stringLength = (string) => {
    const length = string.length;
      if (length >= 1 && length <= 10) {
        return length;
      } else {
        throw new Error("String length must be between 1 and 10 characters.");
      }
};

const reverseString = (string) => {
    return ans= string.split("").reverse().join("");
}; 

class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero.");
      }
      return a / b;
    }
}

const capitalize = (string) => {
    if (string.length === 0) {
      return string; 
    } 
    return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = { stringLength, reverseString, Calculator, capitalize };