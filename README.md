# calcularjs

`calcularjs` is a versatile JavaScript module for mathematical calculations, supporting CommonJS (CJS), ESModule (ESM), and browser environments. It provides a flexible way to evaluate mathematical expressions, making it ideal for projects requiring dynamic calculations.

## Simple Usage Example

You can quickly evaluate mathematical expressions using template literals. Here’s a very simple example:

```javascript
import calcularjs from 'calcularjs';

const thisIsTwo = 2;
const thisIsThree = 3;
const expression = `${thisIsTwo} + ${thisIsThree} + 3`;

const result = calcularjs(expression);
console.log(`The result of the expression "${expression}" is ${result}.`); // 8
```

Here’s a very simple example: (non module, CJS)

```html
<script>
  const a = 0.1
  const b = 0.2
  const result = window.Calcular.calcularjs(`${a} + ${b}`);
  console.log(result) // 0.3
</script>
```

### Example Output
For the above example, the output will be:

```
The result of the expression "2 + 3 + 3" is 8.
```

This demonstrates how you can use template literals to dynamically construct mathematical expressions and evaluate them with `calcularjs`.

## Features
- Supports CJS and ESM module formats.
- Evaluate arithmetic expressions including addition, subtraction, multiplication, division, modulo, and exponentiation.
- Handles nested expressions and respects operator precedence.
- Supports browser and Node.js environments.
- Written in TypeScript, providing type definitions for improved development experience.
- Supports Math methods such as `Math.pow`, `Math.sqrt`, and others, allowing complex mathematical operations within expressions.
- Utilizes integer-based calculations to reduce the risk of errors caused by binary floating-point conversion.

## Installation
To install `calcularjs`, run the following command:

```bash
npm install calcularjs
```

## Usage
You can use `calcularjs` in both ESM and CJS environments. Here is an example of how to use it in a React application:

```tsx
import React, { useState } from 'react';
import calcularjs, { isCaljsValid } from 'calcularjs';

const CalculatorComponent: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<string | number>('');

  const handleCalculate = () => {
    if (isCaljsValid(expression)) {
      const calculationResult = calcularjs(expression);
      setResult(calculationResult);
    } else {
      setResult('Invalid expression');
    }
  };

  return (
    <div>
      <h2>Simple Calculator</h2>
      <input
        type="text"
        value={expression}
        onChange={(e) => setExpression(e.target.value)}
        placeholder="Enter a math expression"
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div>
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
};

export default CalculatorComponent;
```

### Example with Template Literals
You can use template literals to dynamically create expressions. This is useful for combining variables and expressions. Here’s an example:

```tsx
import React, { useState } from 'react';
import calcularjs, { isCaljsValid } from 'calcularjs';

const TemplateLiteralCalculator: React.FC = () => {
  const [value1, setValue1] = useState(10);
  const [value2, setValue2] = useState(5);
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState<string | number>('');

  const handleCalculate = () => {
    const expression = `${value1} ${operation} ${value2}`;
    if (isCaljsValid(expression)) {
      const calculationResult = calcularjs(expression);
      setResult(calculationResult);
    } else {
      setResult('Invalid expression');
    }
  };

  return (
    <div>
      <h2>Calculator with Template Literals</h2>
      <div>
        <input
          type="number"
          value={value1}
          onChange={(e) => setValue1(Number(e.target.value))}
        />
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
          <option value="%">%</option>
        </select>
        <input
          type="number"
          value={value2}
          onChange={(e) => setValue2(Number(e.target.value))}
        />
        <button onClick={handleCalculate}>Calculate</button>
      </div>
      <div>
        <strong>Expression:</strong> {`${value1} ${operation} ${value2}`}
      </div>
      <div>
        <strong>Result:</strong> {result}
      </div>
    </div>
  );
};

export default TemplateLiteralCalculator;
```

### Example Output
If you input `value1 = 10`, `operation = *`, and `value2 = 5`, the displayed output will be:

```
Calculator with Template Literals
Expression: 10 * 5
Result: 50
```

If you input `value1 = 10`, `operation = /`, and `value2 = 0`, the displayed output will be:

```
Calculator with Template Literals
Expression: 10 / 0
Result: Invalid expression
```

## Handling Math Methods and Floating-Point Precision
`calcularjs` allows you to use various `Math` methods such as `Math.pow`, `Math.sqrt`, etc., within expressions. For example:

```javascript
const expression = "Math.pow(2, 3) + Math.sqrt(16)";
const result = calcularjs(expression);
console.log(result); // Outputs: 12
```

This flexibility makes `calcularjs` suitable for more complex mathematical operations.

Moreover, `calcularjs` uses integer-based calculations whenever possible to reduce the risk of floating-point errors that arise due to binary floating-point conversion in JavaScript. For instance, in standard JavaScript:

```javascript
console.log(0.1 + 0.2); // Outputs: 0.30000000000000004
```

`calcularjs` mitigates such issues by performing calculations in a way that minimizes the errors introduced by binary floating-point representation.

## API

### `calcularjs(expression: string): number`
Evaluates a mathematical expression and returns the result as a number.

- **Parameters**: `expression` (string) - The mathematical expression to evaluate.
- **Returns**: The result of the calculation as a number.

### `isCaljsValid(expression: string): boolean`
Checks if a given mathematical expression is valid.

- **Parameters**: `expression` (string) - The mathematical expression to validate.
- **Returns**: `true` if the expression is valid, `false` otherwise.

## License
This project is licensed under the GPL-3.0 License - see the [LICENSE](./LICENSE) file for details.