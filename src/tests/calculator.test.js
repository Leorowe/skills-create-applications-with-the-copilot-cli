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

const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

describe('Calculator extended operations (image examples)', () => {
  test('5 % 2 => 1', () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test('2 ^ 3 => 8', () => {
    expect(power(2, 3)).toBe(8);
  });

  test('√16 => 4', () => {
    expect(squareRoot(16)).toBe(4);
  });
});

describe('Calculator extended operations edge cases', () => {
  test('modulo by zero throws a descriptive error', () => {
    expect(() => modulo(5, 0)).toThrow('Modulo by zero');
  });

  test('modulo with negative dividend', () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test('modulo with negative divisor', () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test('power with exponent 0 returns 1', () => {
    expect(power(5, 0)).toBe(1);
  });

  test('power with negative exponent returns fraction', () => {
    expect(power(2, -2)).toBeCloseTo(0.25, 10);
  });

  test('power with fractional exponent (cube root of 27)', () => {
    expect(power(27, 1 / 3)).toBeCloseTo(3, 10);
  });

  test('squareRoot of 0 returns 0', () => {
    expect(squareRoot(0)).toBe(0);
  });

  test('squareRoot of a non-perfect square returns correct float', () => {
    expect(squareRoot(2)).toBeCloseTo(Math.SQRT2, 10);
  });

  test('squareRoot of a negative number throws a descriptive error', () => {
    expect(() => squareRoot(-9)).toThrow('Square root of negative number');
  });
});
