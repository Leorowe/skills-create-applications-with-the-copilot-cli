/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   add      - Addition: returns the sum of two numbers
 *   subtract - Subtraction: returns the difference of two numbers
 *   multiply - Multiplication: returns the product of two numbers
 *   divide   - Division: returns the quotient of two numbers (throws on division by zero)
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 4 2       => 6
 *   node calculator.js subtract 9 3  => 6
 *   node calculator.js multiply 3 7  => 21
 *   node calculator.js divide 10 2   => 5
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

// Export functions for use as a module
module.exports = { add, subtract, multiply, divide };

// CLI entry point
if (require.main === module) {
  const [,, operation, arg1, arg2] = process.argv;

  const validOps = ['add', 'subtract', 'multiply', 'divide'];
  if (!operation || !validOps.includes(operation)) {
    console.error(`Usage: node calculator.js <operation> <num1> <num2>`);
    console.error(`Operations: ${validOps.join(', ')}`);
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const b = parseFloat(arg2);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both arguments must be valid numbers.');
    process.exit(1);
  }

  try {
    const ops = { add, subtract, multiply, divide };
    const result = ops[operation](a, b);
    console.log(`${result}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
