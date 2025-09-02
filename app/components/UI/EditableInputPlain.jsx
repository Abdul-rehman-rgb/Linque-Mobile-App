import { Feather } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

const EditableInputPlain = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  secureTextEntry = false,
  style,
  placeholderTextColor = "#fff"
}) => {
  return (
    <View style={[styles.inputContainer, style]}>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
      <Feather name="edit-2" size={18} color="#fff" style={styles.icon} />
    </View>
  );
};

export default EditableInputPlain;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#B1B1B1",
    borderColor: "rgba(49, 49, 49, 0.4)",
    borderWidth: 1,
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 16,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
    paddingVertical: 0,
  },
  icon: {
    marginLeft: 8,
  },
});
