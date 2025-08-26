import { useUserData } from "@/context/UserContext";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Image, StyleSheet, TouchableOpacity } from "react-native";
import BackBtn from "../components/UI/BackBtn";
import BookingHistory from "./BookingHistory";
import CalendarPage from "./CalendarPage";
import Cart from "./Cart";
import CustomDrawerContent from "./CustomDrawerContent";
import HelpCentreStack from "./HelpCentreStack";
import HomeStack from "./HomeStack";
import InviteFriend from "./InviteFriend";
import MyCard from "./MyCard";
import MyReview from "./MyReview";
import PrivacyPolicy from "./PrivacyPolicy";
import Profile from "./Profile";
import Restaurant from "./Restaurant";
import Setting from "./Setting";
import Terms from "./Terms";
import Update from "./Update";
import Vouchers from "./Vouchers";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const { user } = useUserData();
  const username = user?.username || user?.name || "User";

  return (
    <Drawer.Navigator
      initialRouteName="home"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerTintColor: "#fff",
        headerShown: true,
        drawerActiveTintColor: "#fff",
        drawerInactiveTintColor: "#fff",
        drawerStyle: {
          width: 300,
        },
        drawerLabelStyle: {
          fontFamily: "Poppins-Medium",
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen
        name="home"
        component={HomeStack}
        options={({ navigation }) => ({
          title: username,
          headerTitleStyle: {
            color: "white",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
            zIndex: 10
          },
          drawerIcon: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
              <Image source={require("../../assets/images/icons/cart.png")} />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Cart")}
              style={{ marginRight: 15 }}
            >
              <Image source={require("../../assets/images/icons/cart.png")} />
            </TouchableOpacity>
          ),
          drawerItemStyle: {
            display: "none",
          },
        })}
      />

      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={({ navigation }) => ({
          title: "Help Center",
          headerTitleStyle: {
            color: "white",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/cart.png")} />
          ),
          headerLeft: () => <BackBtn />,
          drawerItemStyle: {
            display: "none",
          },
        })}
      />

      <Drawer.Screen
        name="HelpCentre"
        component={HelpCentreStack}
        options={({ navigation }) => ({
          title: "Help Center",
          headerTitleStyle: {
            color: "white",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/cart.png")} />
          ),
          headerLeft: () => <BackBtn />,
          drawerItemStyle: {
            display: "none",
          },
        })}
      />
      <Drawer.Screen
        name="(restaurant)"
        component={Restaurant}
        options={({ navigation }) => ({
          headerShown: false,
          title: "Restaurants",
          headerTitleStyle: {
            color: "white",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/cart.png")} />
          ),
          headerLeft: () => <BackBtn />,
          drawerItemStyle: {
            display: "none",
          },
        })}
      />

      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={({ navigation }) => ({
          title: "Settings",
          headerTitleStyle: {
            color: "white",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/cart.png")} />
          ),
          headerLeft: () => <BackBtn />,
          drawerItemStyle: {
            display: "none",
          },
        })}
      />
      {/* <Drawer.Screen
        name="EditBooking"
        component={EditBooking}
        options={({ navigation }) => ({
          title: 'helpcenter',
          headerTitleStyle: {
            color: "white",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/cart.png")} />
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Profile")}
              style={{ marginRight: 15 }}
            >
              <Image source={require("../../assets/images/icons/cart.png")} />
            </TouchableOpacity>
          ),
          drawerItemStyle: {
            display: "none",
          },
        })}
      /> */}

      <Drawer.Screen
        name="My Profile"
        component={Profile}
        options={({ navigation }) => ({
          title: "My Profile",
          headerTitleStyle: {
            color: "white",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                position: "relative",
                zIndex: 99,
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/profile.png")} />
          ),
          headerLeft: () => <BackBtn />,
        })}
      />
      <Drawer.Screen
        name="My Card"
        component={MyCard}
        options={({ navigation }) => ({
          title: "My Card",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/card.png")} />
          ),
          headerLeft: () => <BackBtn />,
        })}
      />
      <Drawer.Screen
        name="My Reviews"
        component={MyReview}
        options={({ navigation }) => ({
          title: "My Reviews",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/review.png")} />
          ),
          headerLeft: () => <BackBtn />,
        })}
      />
      <Drawer.Screen
        name="Booking History"
        component={BookingHistory}
        options={({ navigation }) => ({
          title: "Booking History",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/booking.png")} />
          ),
          headerLeft: () => <BackBtn />,
        })}
      />
      <Drawer.Screen
        name="Invite Friends"
        component={InviteFriend}
        options={({ navigation }) => ({
          title: "Invite Friends",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/invite.png")} />
          ),
          headerLeft: () => <BackBtn />,
        })}
      />
      <Drawer.Screen
        name="Vouchers"
        component={Vouchers}
        options={({ navigation }) => ({
          title: "Vouchers",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/voucher.png")} />
          ),
          headerLeft: () => <BackBtn />,
        })}
      />
      <Drawer.Screen
        name="Calendar"
        component={CalendarPage}
        options={({ navigation }) => ({
          title: "Collections",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image
              source={require("../../assets/images/icons/collection.png")}
            />
          ),
          headerLeft: () => <BackBtn />,
        })}
      />
      <Drawer.Screen
        name="Terms & Policies"
        component={Terms}
        options={({ navigation }) => ({
          title: "Terms & Policies",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/terms.png")} />
          ),
          headerLeft: () => <BackBtn />,
        })}
      />
      <Drawer.Screen
        name="Privacy Policy"
        component={PrivacyPolicy}
        options={({ navigation }) => ({
          title: "Privacy Policy",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/policy.png")} />
          ),
          headerLeft: () => <BackBtn />,
        })}
      />
      <Drawer.Screen
        name="Linque Updates"
        component={Update}
        options={({ navigation }) => ({
          title: "Linque Updates",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/update.png")} />
          ),
          headerLeft: () => <BackBtn />,
        })}
      />
      {/* <Drawer.Screen
        name="Explore"
        component={Explore}
        options={({ navigation }) => ({
          title: "Top Trending",
          headerTitleStyle: {
            color: "#fff",
            fontSize: 22,
            fontWeight: "800",
          },
          headerTitleAlign: "center",
          headerBackground: () => (
            <Image
              source={require("../../assets/images/purpleBg.png")}
              style={{
                width: "100%",
                height: "100%",
                borderBottomLeftRadius: 40,
                borderBottomRightRadius: 40,
              }}
              resizeMode="cover"
            />
          ),
          headerStyle: {
            height: 120,
            backgroundColor: "transparent",
          },
          drawerIcon: () => (
            <Image source={require("../../assets/images/icons/update.png")} />
          ),
          headerLeft: () => <BackBtn />,
        })}
      /> */}
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "800",
  },
});
