import { useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from "react-native";
import Button from "./components/UI/Btn";

export default function SplashScreen() {
  const router = useRouter();

  const ChangePage = () => {
    router.replace("(auth)");
  };

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     router.replace("(auth)");
  //   }, 10000); // 2 seconds is more common
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <ImageBackground
      source={require("../assets/images/splash.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <Image source={require("../assets/images/pengiun-logo.png")} />
        <Text style={styles.text}>Linque</Text>
        <Text style={styles.tagLine}>Elevate Your Outings</Text>
        <Text style={{ fontSize: 15, fontWeight: "300", color: 'white', marginTop: 30, letterSpacing: 1.2}}>
          Restaurants . Activities . Venues . Live Events
        </Text>
        <View style={{ zIndex: 50, marginTop: 24 }}>
          <Button
            title="Get Started"
            onPress={ChangePage}
            textStyle={{ color: "#5C08CC", width: 280 }}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 46,
    fontWeight: "regular",
    color: "#FFFFFF",
    fontFamily: "GoodTimes",
  },
  tagLine: {
    fontSize: 16,
    letterSpacing: 5,
    color: "white",
    fontFamily: "GoodTimes",
  },
});
