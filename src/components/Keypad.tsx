import React from 'react';
import { StyleSheet, View } from 'react-native';
import CalculatorButton from './CalculatorButton';

interface KeypadProps {
  onDigit: (digit: string) => void;
  onOperator: (operator: string) => void;
  onEqual: () => void;
  onClear: () => void;
  onDecimal: () => void;
}

const Keypad: React.FC<KeypadProps> = ({
  onDigit,
  onOperator,
  onEqual,
  onClear,
  onDecimal,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CalculatorButton text="C" onPress={onClear} isSpecial />
        <CalculatorButton text="±" onPress={() => {}} isSpecial />
        <CalculatorButton text="%" onPress={() => {}} isSpecial />
        <CalculatorButton text="÷" onPress={() => onOperator('/')} isOperator />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="7" onPress={() => onDigit('7')} />
        <CalculatorButton text="8" onPress={() => onDigit('8')} />
        <CalculatorButton text="9" onPress={() => onDigit('9')} />
        <CalculatorButton text="×" onPress={() => onOperator('*')} isOperator />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="4" onPress={() => onDigit('4')} />
        <CalculatorButton text="5" onPress={() => onDigit('5')} />
        <CalculatorButton text="6" onPress={() => onDigit('6')} />
        <CalculatorButton text="-" onPress={() => onOperator('-')} isOperator />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="1" onPress={() => onDigit('1')} />
        <CalculatorButton text="2" onPress={() => onDigit('2')} />
        <CalculatorButton text="3" onPress={() => onDigit('3')} />
        <CalculatorButton text="+" onPress={() => onOperator('+')} isOperator />
      </View>
      <View style={styles.row}>
        <CalculatorButton text="0" onPress={() => onDigit('0')} isWide />
        <CalculatorButton text="." onPress={onDecimal} />
        <CalculatorButton text="=" onPress={onEqual} isOperator />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

export default Keypad;