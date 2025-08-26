import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Btn = ({ title, onPress, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={styles.button}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    paddingVertical: 16,
    borderRadius: 9999,
    marginTop: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#6A14DC",
    textAlign: "center",
    fontSize: 19,
    fontWeight: "600",
    fontFamily: "poppins-semibold"
  },
});
export default Btn;