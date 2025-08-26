import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = ({
  placeholder,
  value,
  onChangeText,
  style,
  secureTextEntry,
  keyboardType,
}) => (
  <TextInput
    style={[styles.base, style]}
    placeholder={placeholder}
    placeholderTextColor="#ccc" // light grey for visibility
    value={value}
    onChangeText={onChangeText}
    secureTextEntry={secureTextEntry}
    keyboardType={keyboardType}
  />
);

const styles = StyleSheet.create({
  base: {
    backgroundColor: "transparent", // light transparent white
    height: 50,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 9999,
    paddingHorizontal: 16,
    color: "white",
    fontSize: 16,
    fontWeight: "400",
    fontFamily: 'poppins-medium'
  },
});

export default Input;
