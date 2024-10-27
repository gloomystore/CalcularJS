# Changelog

All notable changes to this project will be documented in this file.

## [1.0.9] - 2024-10-27
### Added
- Improved `calcular` function to better handle various mathematical expressions, including those with spaces and nested parentheses.
- Enhanced error handling with detailed error messages using `console.error`, providing context on why the error occurred and the expression that caused it.
- Added more robust validation checks in `isCalcularValid` to detect invalid sequences, such as missing operators between numbers or unmatched parentheses.
- Introduced support for handling `Math` functions (e.g., `Math.pow`, `Math.sqrt`), allowing them to be evaluated correctly within expressions.

### Changed
- The package's `exports` field in `package.json` was updated to support both CommonJS (`require`) and ESModule (`import`) environments.
    - Changed CommonJS entry point from `dist/cjs/calcular.js` to `dist/cjs/calcular.cjs`.
- Updated the `rollup.config.js` to ensure `console.log` statements are removed while keeping `console.error` and `console.warn` for error diagnostics.
- Optimized the expression evaluator to prevent infinite loops by introducing a maximum iteration count (`MAX_ITERATIONS`), ensuring that complex or invalid expressions do not cause the program to hang.

### Fixed
- Corrected issues where certain sequences (e.g., `3*(2+Math.pow(2,3))2`) caused infinite loops or errors due to improper handling of numbers next to parentheses.
- Improved handling of expressions with missing or unmatched parentheses, providing more informative validation messages.
- Addressed an issue where certain valid expressions were incorrectly flagged as invalid due to overly strict regular expression checks.

### Removed
- All `console.log` statements were removed from the codebase to reduce noise and maintain clean output. Only `console.error` and `console.warn` are retained for error reporting.

### Notes
- The `package.json` now includes `\"exports\"` for `CommonJS`, `ESModule`, and `browser` targets, ensuring compatibility across different environments.
- This release makes the library more resilient to various input edge cases, improving the overall robustness of the expression evaluation.

## [1.0.0] - 2024-10-26
### Added
- Initial release of calcularjs.
- Supports arithmetic operations including addition, subtraction, multiplication, division, modulo, and exponentiation.
- Handles nested expressions with operator precedence.
- Functions to evaluate and validate expressions: `calcular()` and `isCalcularValid()`.
- TypeScript type definitions for improved development experience.