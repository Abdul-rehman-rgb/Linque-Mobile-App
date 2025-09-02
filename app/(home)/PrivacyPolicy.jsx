import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BottomNav from "../components/BottomNav";
import Heading from "../components/UI/Heading";
import Paragraph from "../components/UI/Paragraph";

const PrivacyPolicy = () => {
  const [selectedOption, setSelectedOption] = useState("male");

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View
            style={{
              backgroundColor: "#E5E6E9",
              padding: 10,
              borderRadius: 7,
            }}
          >
            <View
              style={{
                height: 400,
                backgroundColor: "#E5E6E9",
                borderRadius: 7,
                padding: 10,
              }}
            >
              <ScrollView
                showsVerticalScrollIndicator={true}
              >
                <Paragraph style={styles.paragraph}>
                  Welcome to www.lorem-ipsum.info. This site is provided as a
                  service to our visitors and may be used for informational
                  purposes only. Because the Terms and Conditions contain legal
                  obligations, please read them carefully.
                </Paragraph>
                <Text>{"\n"}</Text> {/* Line break */}
                <Text style={{ fontSize: 17, fontFamily: "Poppins-SemiBold" }}>
                  YOUR AGREEMENT
                </Text>
                <Paragraph style={styles.paragraph}>
                  By using this Site, you agree to be bound by, and to comply
                  with, these Terms and Conditions. If you do not agree to these
                  Terms and Conditions, please do not use this site.
                </Paragraph>
                <Text>{"\n"}</Text> {/* Line break */}
                <Paragraph style={styles.paragraph}>
                  PLEASE NOTE: We reserve the right, at our sole discretion, to
                  change, modify or otherwise alter these Terms and Conditions
                  at any time. Unless otherwise indicated, amendments will
                  become effective immediately. Please review these Terms and
                  Conditions periodically. Your continued use of the Site
                  following the posting of changes and/or modifications will
                  constitute your acceptance of the revised Terms and Conditions
                  and the reasonableness of these standards for notice of
                  changes. For your information, this page was last updated as
                  of the date at the top of these terms and conditions. Read
                  More
                </Paragraph>
              </ScrollView>
            </View>
          </View>

          <View
            style={{
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              gap: 10,
            }}
          >
            <Text style={{ marginTop: 10, fontFamily: "Poppins-SemiBold" }}>For more details, visit:</Text>
            <Text style={{ color: "#6A14DC", fontSize: 18, fontFamily: "Poppins-SemiBold" }}>
              https://Linque.com/datapolicy
            </Text>
            <View
              style={{
                backgroundColor: "#E5E6E9",
                width: 203,
                height: 23,
                borderRadius: 18,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <Heading
                style={{ fontSize: 11, color: "#000000", fontFamily: "Poppins-SemiBold" }}
              >
                Last Updated: 4 October, 2025
              </Heading>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomNav />
    </>
  );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 5,
  },
  paragraph: {
    color: "#000000",
    fontSize: 12,
    fontFamily: "Poppins-Medium"
  },
  scrollContent: {
    marginBottom: 80,
    marginTop: 50
  },
});
