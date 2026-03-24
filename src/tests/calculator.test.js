/**
 * Unit tests for calculator functions
 * Examples expanded from images/calc-basic-operations.png:
 *  - 2 + 3
 *  - 10 - 4
 *  - 45 * 2
 *  - 20 / 5
 *
 * Also includes edge cases: division by zero, negatives, floats
 */

const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator basic operations (image examples)', () => {
  test('2 + 3 => 5', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('10 - 4 => 6', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('45 * 2 => 90', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('20 / 5 => 4', () => {
    expect(divide(20, 5)).toBe(4);
  });
});

describe('Calculator edge cases', () => {
  test('division by zero throws a descriptive error', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero');
  });

  test('works with negative numbers', () => {
    expect(add(-2, -3)).toBe(-5);
    expect(subtract(-2, -3)).toBe(1);
    expect(multiply(-2, 3)).toBe(-6);
    expect(divide(-6, 3)).toBe(-2);
  });

  test('works with floating point numbers (close match)', () => {
    expect(add(0.1, 0.2)).toBeCloseTo(0.3, 5);
    expect(divide(1, 3)).toBeCloseTo(1/3, 10);
  });
});
