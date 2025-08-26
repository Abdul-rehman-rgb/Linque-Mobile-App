import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';
import MemoriesScreen from '../collectionTabs/CollectionMain';

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

export default function TopTabs() {
  return (
    <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: { fontSize: 11, fontWeight: '800' },
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarIndicatorStyle: {
            backgroundColor: 'transparent',
            height: 4,
            borderRadius: 5,
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: '#AFAFB1',
          tabBarItemStyle: {
            backgroundColor: '#7118DE',
            margin: 4,
            borderRadius: 50,
            padding: 2,
            minHeight: 23
          },
        }}
      >
        <Tab.Screen name="Collection" component={MemoriesScreen} />
        <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});
