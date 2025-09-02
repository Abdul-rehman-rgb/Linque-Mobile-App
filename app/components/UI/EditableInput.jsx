import { Feather } from "@expo/vector-icons";
import { LinearGradient } from 'expo-linear-gradient';
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
      <LinearGradient
        colors={['#7118DE', '#BF4AF1']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradient}
      >
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
      </LinearGradient>
    </View>
  );
};

export default EditableInput;

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 25,
    overflow: "hidden",
  },
  gradient: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 20,
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
