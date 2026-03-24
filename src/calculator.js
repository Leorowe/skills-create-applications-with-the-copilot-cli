/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add        - Addition: returns the sum of two numbers
 *   subtract   - Subtraction: returns the difference of two numbers
 *   multiply   - Multiplication: returns the product of two numbers
 *   divide     - Division: returns the quotient of two numbers (throws on division by zero)
 *   modulo     - Modulo: returns the remainder of a divided by b (throws on modulo by zero)
 *   power      - Exponentiation: returns base raised to the exponent
 *   squareRoot - Square Root: returns the square root of n (throws on negative numbers)
 *
 * Usage:
 *   node calculator.js <operation> <num1> [num2]
 *
 * Examples:
 *   node calculator.js add 4 2          => 6
 *   node calculator.js subtract 9 3     => 6
 *   node calculator.js multiply 3 7     => 21
 *   node calculator.js divide 10 2      => 5
 *   node calculator.js modulo 10 3      => 1
 *   node calculator.js power 2 8        => 256
 *   node calculator.js squareRoot 16    => 4
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a divided by b
// Throws an error if b is zero to prevent division by zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Modulo: returns the remainder of a divided by b
// Throws an error if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error('Modulo by zero');
  return a % b;
}

// Exponentiation: returns base raised to the given exponent
function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Square Root: returns the square root of n
// Throws an error if n is negative
function squareRoot(n) {
  if (n < 0) throw new Error('Square root of negative number');
  return Math.sqrt(n);
}

// Export functions for use as a module
module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

// CLI entry point
if (require.main === module) {
  const [,, operation, arg1, arg2] = process.argv;

  const singleArgOps = ['squareRoot'];
  const twoArgOps   = ['add', 'subtract', 'multiply', 'divide', 'modulo', 'power'];
  const validOps    = [...twoArgOps, ...singleArgOps];

  if (!operation || !validOps.includes(operation)) {
    console.error(`Usage: node calculator.js <operation> <num1> [num2]`);
    console.error(`Operations: ${validOps.join(', ')}`);
    process.exit(1);
  }

  const a = parseFloat(arg1);
  if (isNaN(a)) {
    console.error('Error: First argument must be a valid number.');
    process.exit(1);
  }

  try {
    const ops = { add, subtract, multiply, divide, modulo, power, squareRoot };
    if (singleArgOps.includes(operation)) {
      console.log(`${ops[operation](a)}`);
    } else {
      const b = parseFloat(arg2);
      if (isNaN(b)) {
        console.error('Error: Second argument must be a valid number.');
        process.exit(1);
      }
      console.log(`${ops[operation](a, b)}`);
    }
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
