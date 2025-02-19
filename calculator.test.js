const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator Functions', () => {
  // Test for addition
  test('adds 2 + 3 to equal 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds 2 + 0 to equal 2', () => {
    expect(add(2, 0)).toBe(2);
  });

  test('adds -1 + -2 to equal -3', () => {
    expect(add(-1, -2)).toBe(-3);
  });

  // Test for subtraction
  test('subtracts 5 - 3 to equal 2', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('subtracts 5 - 0 to equal 5', () => {
    expect(subtract(5, 0)).toBe(5);
  });

  test('subtracts 2 - 5 to equal -3', () => {
    expect(subtract(2, 5)).toBe(-3);
  });

  // Test for multiplication
  test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('multiplies 2 * 0 to equal 0', () => {
    expect(multiply(2, 0)).toBe(0);
  });

  test('multiplies -2 * 3 to equal -6', () => {
    expect(multiply(-2, 3)).toBe(-6);
  });

  // Test for division
  test('divides 6 / 2 to equal 3', () => {
    expect(divide(6, 2)).toBe(3);
  });

  test('divides 6 / 0 to throw an error', () => {
    expect(() => divide(6, 0)).toThrow('Cannot divide by zero');
  });

  test('divides -6 / 2 to equal -3', () => {
    expect(divide(-6, 2)).toBe(-3);
  });
});
