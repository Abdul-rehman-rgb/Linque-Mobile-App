import React from "react";
import { StyleSheet, Text } from "react-native";

const Heading = ({ children, level = 1, style }) => {
  const sizeStyles = [
    { fontSize: 30 },
    { fontSize: 24 },
    { fontSize: 20 },
    { fontSize: 16 },
    { fontSize: 14 },
    { fontSize: 12 },
  ];

  return (
    <Text
      style={[
        styles.base,
        sizeStyles[level - 1],
        style,
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontWeight: "300",
    color: "white",
  },
});

export default Heading;
