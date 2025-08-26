import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";

const BackBtn = ({ label = "Back", color = "#fff", style }) => {
  const navigation = useNavigation();
   const goBack = () => router.back();

  return (
    <TouchableOpacity
      onPress={goBack}
      style={[styles.button, style]}
    >
      <Image
        source={require("../../../assets/images/icons/rightArrow.png")}
        style={styles.icon}
      />
      <Text style={[styles.text, { color }]}>{label}</Text>
    </TouchableOpacity>
  );
};

export default BackBtn;

const styles = StyleSheet.create({
  button: {
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  icon: {
    marginRight: 8,
  },
  text: {
    fontSize: 17,
    textDecorationLine: "underline",
    fontWeight: "500",
  },
});
