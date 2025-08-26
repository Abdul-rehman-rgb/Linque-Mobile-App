// components/RadioButton.js
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const RadioButton = ({ label, selected, onPress }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={[styles.radio, selected && styles.selectedRadio]} />
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: "#6A14DC",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedRadio: {
    backgroundColor: "#fff",
  },
  label: {
    color: "#000",
    fontSize: 15,
    fontWeight: '600',
    textDecorationLine: 'underline'
  },
});

export default RadioButton;
