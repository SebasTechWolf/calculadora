import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CalculatorButtonProps {
  text: string;
  onPress: () => void;
  isOperator?: boolean;
  isSpecial?: boolean;
  isWide?: boolean;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  text,
  onPress,
  isOperator = false,
  isSpecial = false,
  isWide = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        isOperator && styles.operatorButton,
        isSpecial && styles.specialButton,
        isWide && styles.wideButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          isOperator && styles.operatorText,
          isSpecial && styles.specialText,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: 60,
    width: 60,
    margin: 5,
  },
  operatorButton: {
    backgroundColor: '#4a90e2',
  },
  specialButton: {
    backgroundColor: '#e0e0e0',
  },
  wideButton: {
    width: 130,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
  operatorText: {
    color: 'white',
  },
  specialText: {
    color: '#333',
  },
});

export default CalculatorButton;