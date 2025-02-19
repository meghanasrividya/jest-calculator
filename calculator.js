// calculator.js

// Addition function
function add(a, b) {
    return a + b;
  }
  
  // Subtraction function
  function subtract(a, b) {
    return a - b;
  }
  
  // Multiplication function
  function multiply(a, b) {
    return a * b;
  }
  
  // Division function with error handling for division by zero
  function divide(a, b) {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
  
  module.exports = {
    add,
    subtract,
    multiply,
    divide
  };
  