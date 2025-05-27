import { calculate } from '../../../src/utils/calculatorUtils';

//mio
describe('calculate function', () => {
  it('suma 2 numeros', () => {
    expect(calculate(2, 3, '+')).toBe(5);
  });
  it('resta 2 numeros', () => {
    expect(calculate(5, 3, '-')).toBe(2);
  });
  it('multiplica 2 numeros', () => {
    expect(calculate(2, 3, '*')).toBe(6);
  });
  it('divide 2 numeros', () => {
    expect(calculate(6, 3, '/')).toBe(2);
  });
  it('devuelve NaN al dividir por cero', () => {
    expect(calculate(5, 0, '/')).toBeNaN();
  });
});
/* hola */
/* youtube */

describe('calculatorUtils', () => {
  describe('calculate', () => {
    // Pruebas para la suma
    it('debería sumar dos números correctamente', () => {
      expect(calculate(5, 3, '+')).toBe(8);
      expect(calculate(-5, 3, '+')).toBe(-2);
      expect(calculate(0, 0, '+')).toBe(0);
      expect(calculate(1.5, 2.5, '+')).toBe(4);
    });

    // Pruebas para la resta
    it('debería restar dos números correctamente', () => {
      expect(calculate(5, 3, '-')).toBe(2);
      expect(calculate(3, 5, '-')).toBe(-2);
      expect(calculate(0, 0, '-')).toBe(0);
      expect(calculate(2.5, 1.5, '-')).toBe(1);
    });

    // Pruebas para la multiplicación
    it('debería multiplicar dos números correctamente', () => {
      expect(calculate(5, 3, '*')).toBe(15);
      expect(calculate(-5, 3, '*')).toBe(-15);
      expect(calculate(0, 5, '*')).toBe(0);
      expect(calculate(1.5, 2, '*')).toBe(3);
    });

    // Pruebas para la división
    it('debería dividir dos números correctamente', () => {
      expect(calculate(6, 3, '/')).toBe(2);
      expect(calculate(-6, 3, '/')).toBe(-2);
      expect(calculate(0, 5, '/')).toBe(0);
      expect(calculate(5, 2, '/')).toBe(2.5);
    });

    // Prueba para la división por cero
    it('debería manejar la división por cero', () => {
      expect(isNaN(calculate(5, 0, '/'))).toBe(true);
    });

    // Prueba para operador desconocido
    it('debería devolver el segundo operando si el operador es desconocido', () => {
      expect(calculate(5, 3, 'operador_desconocido')).toBe(3);
    });
  });
});