import { Feather } from "@expo/vector-icons";
import { StyleSheet, TextInput, View } from "react-native";

const EditableInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  secureTextEntry = false,
  style,
  placeholderTextColor= "#fff"
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

export default EditableInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#7118DE",
    borderRadius: 9999,
    paddingHorizontal: 10,
    paddingVertical: 8,
    backgroundColor: "#7118DE",
    padding: 16,
    color: "#fff",
    fontSize: 16,
    fontWeight: "400",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: "#fff",
  },
  icon: {
    marginLeft: 8,
  },
});
