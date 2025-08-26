import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import BottomNav from "../../components/BottomNav";
import Heading from "../../components/UI/Heading";
import Paragraph from "../../components/UI/Paragraph";

const Invite = () => {
  return (
    <>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <Heading style={styles.heading} level={3}>
            Scan / Share QR Code Invite
          </Heading>

          {/* <View style={styles.noteBox}>
          <Paragraph style={styles.para}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim dolor quis varius faucibus. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed dignissim dolor quis.
          </Paragraph>
        </View> */}

          <View style={styles.qrContainer}>
            <Image
              source={require("../../../assets/images/qr.png")}
              resizeMode="contain"
              style={styles.qrImage}
            />
            <Image
              source={require("../../../assets/images/icons/QrIcon.png")}
              resizeMode="contain"
              style={styles.qrIcon}
            />
            <Text style={styles.shareText}>Share QR Code</Text>
          </View>
        </View>

        <View
          style={{
            borderTopColor: "#E6E6E6",
            borderTopWidth: 0.5,
            paddingHorizontal: 20,
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Heading style={styles.heading} level={3}>
            Send Invite Link
          </Heading>

          <Text style={styles.link}>https://Linque.com/invite</Text>
          <Text style={styles.subHeading}>Add Invite Note:</Text>

          <View style={styles.noteBox}>
            <Paragraph style={styles.para}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim dolor quis varius faucibus. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed dignissim dolor quis.
            </Paragraph>
          </View>
        </View>
      </ScrollView>
      <BottomNav />
    </>
  );
};

export default Invite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  scrollContent: {
    paddingBottom: 60,
    paddingTop: 10,
    paddingHorizontal: 12,
  },
  heading: {
    color: "#000",
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 10,
  },

  subHeading: {
    fontWeight: "semibold",
    fontSize: 17,
    marginTop: 10,
    marginBottom: 5,
    color: "#000",
  },

  para: {
    color: "#000000",
    fontSize: 12,
  },

  noteBox: {
    backgroundColor: "rgba(210, 213, 219, 0.25)",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },

  qrContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },

  qrImage: {
    width: 200,
    height: 200,
    marginBottom: 10,
    flex: 1,
  },

  qrIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
  },

  shareText: {
    fontWeight: "600",
    color: "#000",
  },

  link: {
    color: "#6A14DC",
    fontWeight: "semibold",
    fontSize: 18,
    marginBottom: 10,
  },
});
