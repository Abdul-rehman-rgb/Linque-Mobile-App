import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BottomNav from "../components/BottomNav";
import GradientBtn from "../components/UI/GradientBtn";
import Heading from "../components/UI/Heading";
import Paragraph from "../components/UI/Paragraph";
import RadioButton from "../components/UI/RadioButton";

const Terms = () => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          {/* Last Updated Bar */}
          <View style={styles.updatedBox}>
            <Heading style={styles.updatedText} accessibilityRole="header">
              Last Updated: 4 October, 2025
            </Heading>
          </View>

          {/* Terms Box */}
          <View style={styles.termsBox}>
            <Paragraph style={styles.paragraph}>
              Welcome to www.lorem-ipsum.info. This site is provided as a
              service to our visitors and may be used for informational
              purposes only. Because the Terms and Conditions contain legal
              obligations, please read them carefully.
            </Paragraph>

            <View style={styles.spacer} />

            <Text style={styles.sectionTitle} accessibilityRole="header">
              YOUR AGREEMENT
            </Text>

            <Paragraph style={styles.paragraph}>
              By using this Site, you agree to be bound by, and to comply
              with, these Terms and Conditions. If you do not agree to these
              Terms and Conditions, please do not use this site.
            </Paragraph>

            <View style={styles.spacer} />

            <Paragraph style={styles.paragraph}>
              PLEASE NOTE: We reserve the right, at our sole discretion, to
              change, modify or otherwise alter these Terms and Conditions at
              any time. Unless otherwise indicated, amendments will become
              effective immediately. Please review these Terms and Conditions
              periodically. Your continued use of the Site following the
              posting of changes and/or modifications will constitute your
              acceptance of the revised Terms and Conditions. For your
              information, this page was last updated as of the date at the top
              of these terms and conditions. Read More
            </Paragraph>
          </View>

          {/* Accept Terms */}
          <RadioButton
            selected={acceptedTerms}
            onPress={() => setAcceptedTerms(!acceptedTerms)}
            label="I accept and agree to the Terms of Use."
          />

          {/* Continue Button */}
          <GradientBtn
            title="Continue"
            disabled={!acceptedTerms}
            accessibilityLabel="Continue to next step"
          />
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNav />
    </>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 5,
  },
  updatedBox: {
    backgroundColor: "#E5E6E9",
    paddingHorizontal: 16,
    height: 36,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  updatedText: {
    fontSize: 16,
    color: "#000000",
    fontWeight: "700",
  },
  termsBox: {
    maxHeight: 500,
    backgroundColor: "#E5E6E9",
    borderRadius: 7,
    padding: 12,
    marginBottom: 5,
  },
  paragraph: {
    color: "#000000",
    fontSize: 13,
    fontFamily: "Poppins-Medium",
  },
  sectionTitle: {
    fontSize: 17,
    fontFamily: "Poppins-SemiBold",
    marginBottom: 5,
  },
  scrollContent: {
    paddingBottom: 80,
    paddingTop: 10,
  },
  spacer: {
    height: 10,
  },
});
