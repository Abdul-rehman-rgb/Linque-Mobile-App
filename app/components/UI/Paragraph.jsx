import React from "react";
import { StyleSheet, Text } from "react-native";

const Paragraph = ({ children, style }) => {
  return (
    <Text style={[styles.base, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    fontSize: 18, // text-lg ~ 18px
    fontWeight: "400", // font-normal
    color: "white",
    fontFamily: "poppins-medium"
  },
});

export default Paragraph;
