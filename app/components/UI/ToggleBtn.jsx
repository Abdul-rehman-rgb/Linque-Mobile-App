import { useState } from "react";
import { StyleSheet, Switch, View } from "react-native";

const ToggleBtn = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View
      style={[
        styles.container,
        // { backgroundColor: isDarkMode ? "#121212" : "#f5f5f5" }
      ]}
    >
      {/* <Text style={[styles.text, { color: isDarkMode ? "#fff" : "#000" }]}>
        {isDarkMode ? "Dark Mode" : "Light Mode"}
      </Text> */}

      <Switch
        value={isDarkMode}
        onValueChange={(value) => setIsDarkMode(value)}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>
  );
}
export default ToggleBtn;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
