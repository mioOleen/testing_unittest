const stringLength = (string) => {
    const length = string.length;
      if (length >= 1 && length <= 10) {
        return length;
      } else {
        throw new Error("String length must be between 1 and 10 characters.");
      }
  };
  
module.exports = stringLength;