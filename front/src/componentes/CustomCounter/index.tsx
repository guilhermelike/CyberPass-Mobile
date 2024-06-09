import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CustomCounter = ({ value, onChange, min, max, step = 1 }) => {
  const increment = () => {
    if (value < max) {
      onChange(value + step);
    }
  };

  const decrement = () => {
    if (value > min) {
      onChange(value - step);
    }
  };

  return (
    <View style={styles.counterContainer}>
      <TouchableOpacity 
        onPress={decrement} 
        disabled={value <= min} 
        style={[styles.button, { backgroundColor: value <= min ? 'gray' : '#FF005C' }]}>
        <Text style={styles.buttonText1}>-</Text>
      </TouchableOpacity>
      <Text style={styles.counterValue}>{value}</Text>
      <TouchableOpacity 
        onPress={increment} 
        disabled={value >= max} 
        style={[styles.button, { backgroundColor: value >= max ? 'gray' : '#FF005C' }]}>
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    gap: 10
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 15,

  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  buttonText1: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  counterValue: {
    marginHorizontal: 10,
    fontSize: 20,
  },
});

export default CustomCounter;
