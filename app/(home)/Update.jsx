import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BottomNav from "../components/BottomNav";
import WaitlistList from "../components/HomeComponents/WaitlistList";
import trending from "../components/trendingData";
import Heading from "../components/UI/Heading";

const Update = () => {
  const [selectedOption, setSelectedOption] = useState("male");

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* Last Updated Bar */}
          <Heading
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "black",
              textAlign: "center",
            }}
          >
            What's new on <Text style={{ fontWeight: "300" }}>Linque?</Text>
          </Heading>
          <View style={styles.updatedBox}>
            <Heading style={styles.updatedText}>
              Last Updated: 04 October, 2025
            </Heading>
          </View>

          {/* Scrollable Paragraph Box */}
          <View style={styles.termsBox}>
            <ScrollView
              showsVerticalScrollIndicator={true}
              style={{ height: 150 }}
            >
              <LinearGradient
                colors={["#7118DE", "#BF4AF1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }} // left to right
                style={styles.gradient}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#FBFBFB",
                      fontWeight: "600",
                    }}
                  >
                    Coming Soon:
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: "500",
                      color: "#FBFBFB",
                    }}
                  >
                    Oct 04, 2025
                  </Text>
                </View>
                <Text
                  style={{ fontSize: 13, fontWeight: "500", color: "#FBFBFB" }}
                >
                  This site is provided as a service to our visitors.
                </Text>
              </LinearGradient>
              <LinearGradient
                colors={["#7118DE", "#BF4AF1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }} // left to right
                style={styles.gradient}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#FBFBFB",
                      fontWeight: "600",
                    }}
                  >
                    Community Note Update:
                  </Text>
                  <Text
                    style={{
                      fontSize: 11,
                      fontWeight: "500",
                      color: "#FBFBFB",
                    }}
                  >
                    Oct 04, 2025
                  </Text>
                </View>
                <Text
                  style={{ fontSize: 13, fontWeight: "500", color: "#FBFBFB" }}
                >
                  This site is provided as a service to our visitors and may be
                  used for informational purposes only. Because the Terms and
                  Conditions contain legal obligations, please read them
                  carefully.
                </Text>
              </LinearGradient>
              <LinearGradient
                colors={["#7118DE", "#BF4AF1"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }} // left to right
                style={styles.gradient}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      color: "#FBFBFB",
                      fontWeight: "600",
                    }}
                  >
                    Community Note Update:
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "500",
                      color: "#FBFBFB",
                    }}
                  >
                    Oct 04, 2025
                  </Text>
                </View>
                <Text
                  style={{ fontSize: 11, fontWeight: "500", color: "#FBFBFB" }}
                >
                  This site is provided as a service to our visitors and may be
                  used for informational purposes only. Because the Terms and
                  Conditions contain legal obligations, please read them
                  carefully.
                </Text>
              </LinearGradient>
            </ScrollView>
          </View>
         
        </View>
         <View style={{borderTopColor: '#E6E6E6', borderTopWidth: 0.5, padding: 10, backgroundColor: '#fff'}}>
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
    backgroundColor: '#fff'
  },
  updatedBox: {
    backgroundColor: "#E5E6E9",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    padding: 10,
  },
  updatedText: {
    fontSize: 13,
    color: "#000000",
    fontWeight: "600",
  },
  termsBox: {
    height: 300,
    backgroundColor: "#E5E6E9",
    borderRadius: 7,
    padding: 10,
    marginBottom: 15,
  },
  paragraph: {
    color: "#FBFBFB",
    fontSize: 12,
    fontWeight: "500",
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 5,
  },
  scrollContent: {
    marginBottom: 80,
  },
  gradient: {
    padding: 10,
    borderRadius: 7,
    gap: 10,
    marginBottom: 10,
  },
  heading: {
    color: "#000",
    fontSize: 20,
    fontWeight: "700",
    textDecorationLine: "underline",
    textAlign: "center",
    marginBottom: 16,
  },
});
