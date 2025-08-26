import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import BottumNav from "../../components/BottomNav";
import Header from "../../components/UI/Header";
import Heading from "../../components/UI/Heading";

const BookingSummary = () => {
  const router = useRouter();
  const [isModalVisible, setModalVisible] = useState(false);

  const goBack = () => router.back();
  const toggleModal = () => setModalVisible(!isModalVisible);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <Header
          title="Restaurant 1"
          onBack={goBack}
          backgroundImage={require("../../../assets/images/purpleBg.png")}
        />

        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
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

          <View style={styles.noteSection}>
            <Text style={styles.sectionTitle}>Note for Restaurant:</Text>
            <View style={styles.noteBox}>
              <Text style={styles.noteContent}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dignissim dolor quis varius faucibus. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Sed dignissim dolor quis
                varius faucibus.
              </Text>
            </View>
          </View>

          <View style={styles.promoSection}>
            <TextInput
              placeholder="Promo Code:  *****"
              style={styles.promoInput}
            />
            <TouchableOpacity style={styles.dealsButton} onPress={toggleModal} activeOpacity={0.8}>
              <LinearGradient
                colors={["#7118DE", "#BF4AF1"]}
                style={styles.dealsButtonGradient}
              >
                <Image
                  source={require("../../../assets/images/icons/discount.png")}
                  style={styles.dealsIcon}
                />
                <Text style={styles.dealsButtonText}>Share Invite</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.locationSection}>
            <Text style={styles.sectionTitle}>Location</Text>
            <Image
              source={require("../../../assets/images/map.png")}
              style={styles.mapImage}
            />
            <View style={styles.confirmationSection}>
              <Image
                source={require("../../../assets/images/success.png")}
                style={styles.successIcon}
              />
              <Text style={styles.confirmationText}>
                You have successfully confirmed your reservation
              </Text>
            </View>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>Edit Reservation</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <Modal visible={isModalVisible} animationType="slide" transparent={true} onRequestClose={toggleModal}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={toggleModal}>
              <Image
                source={require("../../../assets/images/icons/close.png")}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
            <View style={styles.qrContainer}>
              <Image
                source={require("../../../assets/images/qr.png")}
                style={styles.qrImage}
              />
              <Image
                source={require("../../../assets/images/icons/QrIcon.png")}
                style={styles.qrIcon}
              />
              <Text style={styles.shareText}>Share QR Code</Text>
              <View style={styles.modalDivider} />
              <Text style={styles.modalHeading}>Send Invite Link</Text>
              <Text style={styles.link}>https://Linque.com/invite</Text>
            </View>
          </View>
        </Modal>

        <BottumNav />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingBottom: 120,
    paddingHorizontal: 16,
    marginTop: 10,
    gap: 24,
  },
  headingContainer: {
    alignItems: "center",
    marginVertical: 20,
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
    gap: 12,
  },
  infoItem: {
    alignItems: "center",
    flex: 1,
    gap: 8,
  },
  icon: {
    width: 24,
    height: 24,
  },
  infoBox: {
    backgroundColor: "#D2D5DB",
    borderRadius: 18,
    paddingVertical: 12,
    paddingHorizontal: 12,
    width: "100%",
    alignItems: "center",
  },
  date: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "500",
  },
  noteSection: {
    gap: 8,
  },
  sectionTitle: {
    color: "#000000",
    fontSize: 15,
    fontWeight: "600",
    marginBottom: 4,
    textAlign: 'center'
  },
  noteBox: {
    backgroundColor: "#D2D5DB",
    borderRadius: 10,
    padding: 16,
  },
  noteContent: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 20,
  },
  promoSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 12,
  },
  promoInput: {
    backgroundColor: "#D2D5DB",
    borderRadius: 18,
    padding: 14,
    flex: 1,
    fontSize: 14,
  },
  dealsButton: {
    borderRadius: 18,
    overflow: "hidden",
    minWidth: 120,
  },
  dealsButtonGradient: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dealsIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
    tintColor: "#FFFFFF",
  },
  dealsButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
  locationSection: {
    borderTopColor: "#E6E6E6",
    borderTopWidth: 1,
    gap: 16,
    paddingTop: 16,
  },
  mapImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
  },
  confirmationSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    //backgroundColor: "#F8F8F8",
    borderRadius: 12,
  },
  successIcon: {
    // width: 24,
    // height: 24,
    resizeMode: "contain",
  },
  confirmationText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000000",
    flex: 1,
    marginLeft: 12,
  },
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
  },
  editButton: {
    backgroundColor: "#E5E6E9",
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 27,
    width: 175,
  },
  editButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    zIndex: 1,
    padding: 10,
  },
  closeIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  qrContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginHorizontal: 24,
  },
  qrImage: {
    width: 200,
    height: 200,
    marginBottom: 16,
  },
  qrIcon: {
    width: 40,
    height: 40,
    marginBottom: 16,
  },
  shareText: {
    fontWeight: "600",
    color: "#000000",
    fontSize: 16,
    marginBottom: 8,
  },
  modalDivider: {
    borderTopColor: "#E6E6E6",
    borderTopWidth: 1,
    width: "100%",
    marginVertical: 16,
  },
  modalHeading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000000",
    marginBottom: 12,
  },
  link: {
    color: "#6A14DC",
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
  },
});

export default BookingSummary;