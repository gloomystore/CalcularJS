# caljs

`caljs` is a versatile JavaScript module for mathematical calculations, supporting CommonJS (CJS), ESModule (ESM), and browser environments. It provides a flexible way to evaluate mathematical expressions, making it ideal for projects requiring dynamic calculations.

## Features
- Supports CJS and ESM module formats.
- Evaluate arithmetic expressions including addition, subtraction, multiplication, division, modulo, and exponentiation.
- Handles nested expressions and respects operator precedence.
- Supports browser and Node.js environments.
- Written in TypeScript, providing type definitions for improved development experience.

## Installation
To install `caljs`, run the following command:

```bash
npm install caljs
```

## Usage
You can use `caljs` in both ESM and CJS environments. Here is an example of how to use it in a React application:

```tsx
import React, { useState } from 'react';
import caljs, { isCaljsValid } from 'caljs';

const CalculatorComponent: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState<string | number>('');

  const handleCalculate = () => {
    if (isCaljsValid(expression)) {
      const calculationResult = caljs(expression);
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

## API

### `caljs(expression: string): number`
Evaluates a mathematical expression and returns the result as a number.

- **Parameters**: `expression` (string) - The mathematical expression to evaluate.
- **Returns**: The result of the calculation as a number.

### `isCaljsValid(expression: string): boolean`
Checks if a given mathematical expression is valid.

- **Parameters**: `expression` (string) - The mathematical expression to validate.
- **Returns**: `true` if the expression is valid, `false` otherwise.

## License
This project is licensed under the GPL-3.0 License - see the [LICENSE](./LICENSE) file for details.