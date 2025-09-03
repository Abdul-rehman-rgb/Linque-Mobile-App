// CustomDrawerContent.js
import { useUserData } from "@/context/UserContext";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Heading from "../components/UI/Heading";


export default function CustomDrawerContent(props) {
  const { user } = useUserData();
const username = user?.username || user?.name || "User";
  const handleLogout = () => {
  // Logout logic here
  router.replace('(auth)');
};


  return (
    <ImageBackground
      source={require('../../assets/images/menuBg.png')}
      style={styles.background}
    >
    <DrawerContentScrollView {...props}>

      <View>
        <View style={styles.userInfoContainer}>
          {/* Header Row */}
          <View style={styles.headerRow}>
            <Image
              style={styles.menuIcon}
              source={require("../../assets/images/icons/menu.png")}
            />
            <Heading style={styles.heading}>Menu</Heading>
          </View>

          {/* User Name */}
          <Text style={styles.userName}>{username}</Text>

          {/* Age & Location Row */}
          <View style={styles.ageLocationRow}>
            <Text style={styles.ageText}>(20 years)</Text>
            <Text style={styles.locationText}>Karachi</Text>
          </View>

          {/* Search Box */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search..."
              placeholderTextColor="#ccc"
            />
          </View>
        </View>

        {/* Drawer Navigation Items */}
        <DrawerItemList {...props} />

        {/* Login button at the bottom */}
        <View style={styles.footer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogout}>
            <Image source={require('../../assets/images/icons/logout.png')}/>
            <Text style={styles.loginText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    width: 300
  },
  userInfoContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  menuIcon: {
    resizeMode: "contain",
    width: 48,
    height: 22,
  },
  heading: {
    fontSize: 22,
    fontWeight: "800",
    marginLeft: 10,
    color: "#fff",
    fontFamily: "poppins-bold"
  },
  userName: {
    fontSize: 18,
    fontFamily: "poppins-SemiBold",
    color: "#fff",
    marginBottom: 10,
  },
  ageLocationRow: {
    flexDirection: "row",
    marginBottom: 10,
  },
  ageText: {
    fontSize: 15,
    color: "#fff",
    marginRight: 10,
    fontFamily: "poppins-medium"
  },
  locationText: {
    fontSize: 15,
    color: "#fff",
    textDecorationLine: "underline",
    fontFamily: "poppins-medium"
  },
  searchContainer: {
    marginBottom: 10,
  },
  searchInput: {
    backgroundColor: "white",
    borderRadius: 30,
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#6A14DC',
    fontFamily: "poppins-medium",
  },
  loginButton: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 10,
  paddingHorizontal: 20,
  backgroundColor: '#fff',
  borderRadius: 9999,
  marginTop: 20,
  alignSelf: 'center',
},
loginText: {
  color: '#000',
  fontWeight: '600',
  marginLeft: 8,
  fontSize: 16,
  fontFamily: "poppins-SemiBold"
},

});
