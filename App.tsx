import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import Calculator from './src/components/Calculator';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.calculatorContainer}>
        <Calculator />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  calculatorContainer: {
    flex: 1,
    padding: 20,
  },
});