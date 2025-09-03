import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, View } from "react-native";
import CollectionMain from "../collectionTabs/CollectionMain";

const Tab = createMaterialTopTabNavigator();

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}

function Activities() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Activities Screen</Text>
    </View>
  );
}

function Venues() {
  return (
    <View style={styles.screen}>
      <Text style={styles.text}>Venues Screen</Text>
    </View>
  );
}

export default function MyTopTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarLabel: ({ focused }) => (
          <LinearGradient
            colors={focused ? ["#7118DE", "#BF4AF1"] : ["#B1B1B1", "#B1B1B1"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.tabGradient}
          >
            <Text style={[styles.tabText, { color: focused ? "#fff" : "#444" }]}>
              {route.name}
            </Text>
          </LinearGradient>
        ),
        tabBarStyle: styles.tabBar,
        tabBarIndicatorStyle: styles.tabIndicator,
        tabBarItemStyle: { flex: 1 },
        tabBarScrollEnabled: false,
      })}
    >
      <Tab.Screen name="Collection" component={CollectionMain} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tab.Screen name="Activities" component={Activities} />
      <Tab.Screen name="Venues" component={Venues} />
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
    fontSize: 11,
    fontWeight: "600",
  },
  tabGradient: {
    flex: 1,
    borderRadius: 50,
    paddingHorizontal: 12,
    paddingVertical: 6,
    justifyContent: "center",
    alignItems: "center",
    minHeight: 28,
  },
  tabText: {
    fontSize: 8,
    fontFamily: "Poppins-SemiBold",
  },
  tabBar: {
    backgroundColor: "#fff",
    height: 50,
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },
  tabIndicator: {
    backgroundColor: "transparent",
    height: 0,
  },
});
