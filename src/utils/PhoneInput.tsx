import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface PhoneInputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const PhoneInput = ({ value, onChangeText, placeholder = "Enter phone number" }: PhoneInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.prefix}>+91</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        keyboardType="phone-pad"
        value={value}
        onChangeText={onChangeText}
        maxLength={10}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 30,
    paddingHorizontal: 12,
    height: 56,
  },
  prefix: {
    fontSize: 16,
    marginRight: 8,
    color: '#333',
    fontWeight: '600',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    height: '100%',
  },
});

export default PhoneInput; 