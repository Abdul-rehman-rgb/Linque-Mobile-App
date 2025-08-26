import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { StyleSheet, Text, View } from "react-native";
import CollectionMain from "./CollectionMain";

const Tab = createMaterialTopTabNavigator();

// Dummy screens
function HomeScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Home Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}

export default function MyTopTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: "700",
          paddingVertical: 1,
        },
        tabBarStyle: { backgroundColor: "#fff", height: 23 },
        tabBarIndicatorStyle: {
          backgroundColor: "transparent",
          height: 3,
          borderRadius: 5,
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#AFAFB1",
        tabBarItemStyle: {
          backgroundColor: "#7118DE",
          marginHorizontal: 2, // reduced margin
          marginVertical: 4,
          borderRadius: 50,
          paddingHorizontal: 2, // smaller width
          paddingVertical: 2, // smaller height
          minHeight: 28, // reduced height
        },
      }}
    >
      <Tab.Screen name="Collections" component={CollectionMain} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
  },
});
