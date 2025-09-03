import { useRouter } from "expo-router";
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BottumNav from "../../components/BottomNav";
import GradientBtn from "../../components/UI/GradientBtn";
import Header from "../../components/UI/Header";
import Heading from "../../components/UI/Heading";

const Processing = () => {
  const router = useRouter();

  const goBack = () => router.back();
  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Restaurant 1"
        onBack={goBack}
        backgroundImage={require("../../../assets/images/1.png")}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headingContainer}>
          <Heading style={styles.restaurantName} level={3}>
            Confirming Booking
          </Heading>
        </View>

        <View style={styles.infoContainer}>
          <View style={styles.infoItem}>
            <Image
              source={require("../../../assets/images/icons/calendar.png")}
              style={styles.icon}
            />
            <View style={styles.infoBox}>
              <Text style={styles.date}>Jan 13, 2025</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Image
              source={require("../../../assets/images/icons/clock.png")}
              style={styles.icon}
            />
            <View style={styles.infoBox}>
              <Text style={styles.date}>12:30 PM</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Image
              source={require("../../../assets/images/icons/user.png")}
              style={styles.icon}
            />
            <View style={styles.infoBox}>
              <Text style={styles.date}>03 Seats</Text>
            </View>
          </View>
        </View>

          <ImageBackground
            source={require("../../../assets/images/process.png")}
            resizeMode="contain"
            style={styles.background}
          >
            <Heading level={3} style={styles.heading}>
              Your booking is being processed
            </Heading>
            <ActivityIndicator size="large" color="#fff" />
          </ImageBackground>

        {/* Button */}
        <View style={styles.buttonWrapper}>
          <GradientBtn
            title="Check Availability"
            style={styles.gradientButton}
            onPress={() => {
              router.push("/BookingSummary");
            }}
          />
        </View>
      </ScrollView>

      <BottumNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 120,
    paddingHorizontal: 16,
    marginTop: 10,
  },
  headingContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20
  },
  restaurantName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1F2937",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  infoItem: {
    alignItems: "center",
    flex: 1,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 8,
  },
  infoBox: {
    backgroundColor: "#D2D5DB",
    borderRadius: 18,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: "100%",
    alignItems: "center",
  },
  date: {
    color: "#000000",
    fontSize: 13,
    fontWeight: "500",
  },
  buttonWrapper: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  gradientButton: {
    width: "100%",
  },
  background: {
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
    height: 551
  },
  heading: {
    textAlign: "center",
    color: "#fff",
    marginBottom: 15,
  },
});

export default Processing;
