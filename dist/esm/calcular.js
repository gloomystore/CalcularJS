const calc = (expression) => {
    // isCalcValid를 사용하여 입력 유효성 검사
    if (!isCalcValid(expression)) {
        console.error(`Invalid expression: ${expression}`);
        return NaN; // 유효하지 않은 수식일 경우 NaN 반환
    }
    expression = expression.replace(/\s+/g, ''); // 수식에서 모든 공백 제거
    // 문자열을 파싱하여 숫자 형태로 반환하는 함수
    function parseNumber(numStr) {
        if (typeof numStr === 'number') {
            return { value: numStr, multiplier: 1 };
        }
        // 소수점을 포함한 경우
        if (numStr.includes('.')) {
            const floatVal = parseFloat(numStr);
            return { value: floatVal, multiplier: 1 };
        }
        else {
            // 정수인 경우
            return { value: parseInt(numStr, 10), multiplier: 1 };
        }
    }
    // 두 숫자와 연산자를 받아 계산을 수행하는 함수
    function performOperation(num1, num2, operator) {
        const int1 = num1.value;
        const int2 = num2.value;
        let resultValue = 0;
        switch (operator) {
            case '+':
                resultValue = int1 + int2;
                break;
            case '-':
                resultValue = int1 - int2;
                break;
            case '*':
                resultValue = int1 * int2;
                break;
            case '/':
                if (int2 === 0)
                    throw new Error('Division by zero!');
                resultValue = int1 / int2;
                break;
            case '%':
                resultValue = int1 % int2;
                break;
            case '^':
                resultValue = Math.pow(int1, int2);
                break;
            default:
                throw new Error(`Unknown operator: ${operator}`);
        }
        return { value: resultValue, multiplier: 1 };
    }
    // 수식을 평가하여 결과를 반환하는 함수
    function evaluate(expression) {
        let regex;
        const MAX_ITERATIONS = 1000; // 최대 반복 횟수 설정
        let iterationCount = 0;
        // Math 메서드 호출 처리
        regex = /Math\.(\w+)\(([^)]*)\)/;
        while (regex.test(expression)) {
            if (++iterationCount > MAX_ITERATIONS) {
                throw new Error('Maximum iterations reached while evaluating Math methods');
            }
            expression = expression.replace(regex, (match, methodName, args) => {
                try {
                    if (typeof Math[methodName] === 'function') {
                        // 인자가 없거나 올바르지 않은 형식인지 확인
                        if (!args || args.trim() === '') {
                            throw new Error(`Invalid arguments for Math method: ${methodName}`);
                        }
                        const argValues = args.split(',').map((arg) => parseFloat(arg.trim()));
                        const result = Math[methodName](...argValues);
                        return result.toString();
                    }
                    else {
                        throw new Error(`Unknown Math method: ${methodName}`);
                    }
                }
                catch (error) {
                    console.error(`Error evaluating Math method (${methodName}) in expression: ${expression}`, error);
                    throw error;
                }
            });
        }
        iterationCount = 0; // 반복 횟수 초기화
        // 괄호 안의 표현식을 먼저 계산
        while (expression.includes('(')) {
            if (++iterationCount > MAX_ITERATIONS) {
                throw new Error('Maximum iterations reached while evaluating parentheses');
            }
            expression = expression.replace(/\(([^()]+)\)/g, (match, subExpr) => {
                try {
                    return evaluate(subExpr).toString();
                }
                catch (error) {
                    console.error(`Error evaluating sub-expression (${subExpr}) in expression: ${expression}`, error);
                    throw error;
                }
            });
        }
        iterationCount = 0; // 반복 횟수 초기화
        // 거듭제곱 연산 처리
        regex = /(-?\d+(\.\d+)?)\^(-?\d+(\.\d+)?)/;
        while (regex.test(expression)) {
            if (++iterationCount > MAX_ITERATIONS) {
                throw new Error('Maximum iterations reached while evaluating exponentiation');
            }
            expression = expression.replace(regex, (match, num1, _, num2) => {
                try {
                    const parsedNum1 = parseNumber(num1);
                    const parsedNum2 = parseNumber(num2);
                    const result = performOperation(parsedNum1, parsedNum2, '^');
                    return result.value.toString();
                }
                catch (error) {
                    console.error(`Error performing exponentiation (${num1} ^ ${num2}) in expression: ${expression}`, error);
                    throw error;
                }
            });
        }
        // 곱셈, 나눗셈, 나머지 연산 처리
        regex = /(-?\d+(\.\d+)?)([*/%])(-?\d+(\.\d+)?)/;
        while (regex.test(expression)) {
            if (++iterationCount > MAX_ITERATIONS) {
                throw new Error('Maximum iterations reached while evaluating multiplication/division');
            }
            expression = expression.replace(regex, (match, num1, _, operator, num2) => {
                try {
                    const parsedNum1 = parseNumber(num1);
                    const parsedNum2 = parseNumber(num2);
                    const result = performOperation(parsedNum1, parsedNum2, operator);
                    return result.value.toString();
                }
                catch (error) {
                    console.error(`Error performing operation (${num1} ${operator} ${num2}) in expression: ${expression}`, error);
                    throw error;
                }
            });
        }
        // 덧셈, 뺄셈 연산 처리
        regex = /(-?\d+(\.\d+)?)(\s*[+-]\s*)(-?\d+(\.\d+)?)/;
        while (regex.test(expression)) {
            if (++iterationCount > MAX_ITERATIONS) {
                throw new Error('Maximum iterations reached while evaluating addition/subtraction');
            }
            expression = expression.replace(regex, (match, num1, _, operator, num2) => {
                try {
                    const parsedNum1 = parseNumber(num1);
                    const parsedNum2 = parseNumber(num2);
                    const cleanOperator = operator.trim(); // 공백 제거
                    const result = performOperation(parsedNum1, parsedNum2, cleanOperator);
                    return result.value.toString();
                }
                catch (error) {
                    console.error(`Error performing addition/subtraction (${num1} ${operator} ${num2}) in expression: ${expression}`, error);
                    throw error;
                }
            });
        }
        const parsedResult = parseNumber(expression);
        return parsedResult.value;
    }
    try {
        return evaluate(expression);
    }
    catch (error) {
        console.error(`Error in calculation for expression: ${expression}`, error.message);
        return NaN;
    }
};
// 유효성 검증 함수
const isCalcValid = (expression) => {
    expression = expression.replace(/\s+/g, ''); // 공백 제거
    const stack = [];
    for (let char of expression) {
        if (char === '(') {
            stack.push(char);
        }
        else if (char === ')') {
            if (stack.length === 0) {
                console.error(`Unmatched closing parenthesis in expression: ${expression}`);
                return false;
            }
            stack.pop();
        }
    }
    if (stack.length !== 0) {
        console.error(`Unmatched opening parenthesis in expression: ${expression}`);
        return false;
    }
    // 유효하지 않은 문자가 포함되었는지 검사
    if (/[^0-9+\-*/%^().,Math\w]/.test(expression)) {
        console.error(`Invalid characters found in expression: ${expression}`);
        return false;
    }
    // 숫자와 연산자 사이의 관계를 검사
    const invalidSequenceRegex = /(\d+\s*\()|(\)\s*\d+)|(\d\s+\d)/;
    if (invalidSequenceRegex.test(expression)) {
        console.error(`Invalid sequence of numbers and parentheses in expression: ${expression}`);
        return false;
    }
    // 최종적인 형식 검사
    const validFormat = /^(\d+(\.\d+)?|Math\.\w+\([^()]*\)|\([^()]+\)|[+\-*/%^])+$/;
    const mathFunctionRegex = /Math\.\w+\([^()]*\)/g;
    const expressionWithoutMathFunctions = expression.replace(mathFunctionRegex, '0');
    const validSimpleFormat = /^[-+*/%^()0-9.]+$/;
    if (!validFormat.test(expression) && !validSimpleFormat.test(expressionWithoutMathFunctions)) {
        console.error(`The expression format is invalid: ${expression}`);
        return false;
    }
    return true;
};
export { calc, isCalcValid };
export default calc;
