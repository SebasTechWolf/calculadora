/**
 * Realiza una operación matemática entre dos operandos
 * @param firstOperand Primer operando
 * @param secondOperand Segundo operando
 * @param operator Operador matemático (+, -, *, /)
 * @returns Resultado de la operación
 */
export const calculate = (
  firstOperand: number,
  secondOperand: number,
  operator: string
): number => {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand;
    case '-':
      return firstOperand - secondOperand;
    case '*':
      return firstOperand * secondOperand;
    case '/':
      if (secondOperand === 0) {
        // Manejo de división por cero
        return NaN;
      }
      return firstOperand / secondOperand;
    default:
      return secondOperand;
  }
};