import { LinearGradient } from "expo-linear-gradient";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import BottomNav from "../components/BottomNav";
import WaitlistList from "../components/HomeComponents/WaitlistList";
import trending from "../components/trendingData";
import Heading from "../components/UI/Heading";

// 🔹 Reusable Update Card
const UpdateCard = ({ title, date, description }) => (
  <LinearGradient
    colors={["#7118DE", "#BF4AF1"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.gradient}
  >
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardDate}>{date}</Text>
    </View>
    <Text style={styles.cardDescription}>{description}</Text>
  </LinearGradient>
);

const updates = [
  {
    id: "1",
    title: "Coming Soon:",
    date: "Oct 04, 2025",
    description: "This site is provided as a service to our visitors.",
  },
  {
    id: "2",
    title: "Community Note Update:",
    date: "Oct 04, 2025",
    description:
      "This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.",
  },
  {
    id: "3",
    title: "Community Note Update:",
    date: "Oct 04, 2025",
    description:
      "This site is provided as a service to our visitors and may be used for informational purposes only. Because the Terms and Conditions contain legal obligations, please read them carefully.",
  },
];

const Update = () => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* Title */}
          <Heading
            style={styles.mainHeading}
            accessibilityRole="header"
          >
            What's new on{" "}
            <Text style={styles.lightHeading}>Linque?</Text>
          </Heading>

          {/* Last Updated */}
          <View style={styles.updatedBox}>
            <Heading style={styles.updatedText}>
              Last Updated: 4 October, 2025
            </Heading>
          </View>

          {/* Updates List */}
          <View style={styles.termsBox}>
            <FlatList
              data={updates}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <UpdateCard
                  title={item.title}
                  date={item.date}
                  description={item.description}
                />
              )}
              showsVerticalScrollIndicator
            />
          </View>
        </View>

        {/* Happening Section */}
        <View style={styles.happeningSection}>
          <Heading level={3} style={styles.heading}>
            Happening in your City
          </Heading>
          <WaitlistList data={trending} />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </>
  );
};

export default Update;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 5,
    backgroundColor: "#fff",
  },
  mainHeading: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    color: "black",
    textAlign: "center",
  },
  lightHeading: {
    fontWeight: "300",
    fontFamily: "Poppins-Light",
  },
  updatedBox: {
    backgroundColor: "#E5E6E9",
    paddingHorizontal: 16,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  updatedText: {
    fontSize: 11,
    color: "#000",
    fontWeight: "600",
  },
  termsBox: {
    height: 300,
    backgroundColor: "#E5E6E9",
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  gradient: {
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardTitle: {
    fontSize: 13,
    color: "#FBFBFB",
    fontFamily: "Poppins-SemiBold",
  },
  cardDate: {
    fontSize: 11,
    fontFamily: "Poppins-Medium",
    color: "#FBFBFB",
  },
  cardDescription: {
    fontSize: 12,
    fontFamily: "Poppins-Medium",
    color: "#FBFBFB",
    marginTop: 6,
  },
  happeningSection: {
    borderTopColor: "#E6E6E6",
    borderTopWidth: 0.5,
    padding: 10,
    backgroundColor: "#fff",
  },
  heading: {
    color: "#000",
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    textDecorationLine: "underline",
    textAlign: "center",
    marginBottom: 16,
  },
  scrollContent: {
    marginBottom: 80,
  },
});
