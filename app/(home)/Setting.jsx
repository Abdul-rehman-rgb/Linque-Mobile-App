import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import BottomNav from "../components/BottomNav";

export default function SettingsScreen() {
  const [pushNotifications, setPushNotifications] = useState(true);
  const [offers, setOffers] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    // Logout logic here
    router.replace("(auth)");
  };

  // Theme colors based on darkMode state
  const themeStyles = {
    backgroundColor: darkMode ? "#121212" : "#fff",
    textColor: darkMode ? "#fff" : "#000",
    noteBg: darkMode ? "#1E1E1E" : "#F8F8F8",
  };

  return (
    <>
      <ScrollView
        contentContainerStyle={[
          styles.container,
          { backgroundColor: themeStyles.backgroundColor },
        ]}
      >
        {/* Push Notifications */}
        <View style={styles.row}>
          <Text style={[styles.label, { color: themeStyles.textColor }]}>
            Receive Push Notifications
          </Text>
          <Switch
            value={pushNotifications}
            onValueChange={setPushNotifications}
            trackColor={{ false: "#ccc", true: "#7B2EFF" }}
            thumbColor="#fff"
          />
        </View>

        {/* Offers */}
        <View style={styles.row}>
          <Text style={[styles.label, { color: themeStyles.textColor }]}>
            Receive offers via mail
          </Text>
          <Switch
            value={offers}
            onValueChange={setOffers}
            trackColor={{ false: "#ccc", true: "#7B2EFF" }}
            thumbColor="#fff"
          />
        </View>

        {/* Dark Mode */}
        <View style={styles.row}>
          <Text style={[styles.label, { color: themeStyles.textColor }]}>
            Enable Dark Mode
          </Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#ccc", true: "#7B2EFF" }}
            thumbColor="#fff"
          />
        </View>

        {/* Version */}
        <Text style={[styles.version, { color: themeStyles.textColor }]}>
          Version 1.0.1
        </Text>

        {/* Logout Button */}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogout}>
          <LinearGradient
            colors={["#7118DE", "#BF4AF1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          >
            <Image
              source={require("../../assets/images/icons/logout.png")}
              style={{ width: 16, height: 16, tintColor: "#fff" }}
            />
            <Text style={styles.loginText}>Log Out</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Community Note */}
        <Text style={[styles.noteTitle, { color: themeStyles.textColor }]}>
          <Text style={{ fontWeight: "400" }}>Linque</Text> Community Note:
        </Text>
        <View style={[styles.noteBox, { backgroundColor: themeStyles.noteBg }]}>
          <ScrollView style={{ maxHeight: 100 }}>
            <Text style={[styles.noteText, { color: themeStyles.textColor }]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim dolor quis varius faucibus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed dignissim dolor quis varius
              faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed dignissim dolor quis varius faucibus.
            </Text>
          </ScrollView>
        </View>
      </ScrollView>
      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  version: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 12,
  },
  loginButton: {
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 30,
    overflow: "hidden",
  },
  gradient: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  loginText: {
    color: "#fff",
    fontWeight: "600",
    marginLeft: 8,
    fontSize: 16,
  },
  noteTitle: {
    marginTop: 20,
    fontWeight: "600",
    fontSize: 17,
    color: "#000000",
    textAlign: "center",
  },
  noteBox: {
    borderRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  noteText: {
    fontSize: 12,
    fontWeight: "medium",
    color: "#000000",
  },
});
