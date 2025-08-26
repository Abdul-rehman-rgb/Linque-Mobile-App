import React from "react";
import { StyleSheet, Text } from "react-native";

const Label = ({ children }) => {
  return (
    <Text style={styles.base}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontSize: 15,
    color: "white",
    fontFamily: "poppins-medium",
    fontWeight: "500",
  },
});

export default Label;
