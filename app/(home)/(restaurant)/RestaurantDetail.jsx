import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomNav from "../../components/BottomNav";
import GradientBtn from "../../components/UI/GradientBtn";
import Header from "../../components/UI/Header";
import Heading from "../../components/UI/Heading";

const { width } = Dimensions.get("window");

const hoursData = [
  { day: "Mon", time: "12 PM – 11 PM" },
  { day: "Tue", time: "12 PM – 11 PM" },
  { day: "Wed", time: "12 PM – 11 PM" },
  { day: "Thu", time: "12 PM – 11 PM" },
  { day: "Fri", time: "12 PM – 12 AM" },
  { day: "Sat", time: "11 AM – 12 AM" },
  { day: "Sun", time: "11 AM – 10 PM" },
];

const dealsData = [
  {
    title: "Linque Deals",
    discount: "30%",
    code: "215485",
    description: "Use Promo Code",
  },
  {
    title: "Bank Discounts",
    discount: "40%",
    code: "HBL",
    description: "Platinum, Gold & Ladies Cards",
  },
];

const InfoButton = ({ icon, label }) => (
  <TouchableOpacity style={styles.infoButton}>
    <Image source={icon} style={styles.infoIcon} />
    <Text style={styles.infoText}>{label}</Text>
  </TouchableOpacity>
);

const OpeningHour = ({ day, time }) => (
  <View style={styles.hourRow}>
    <Text style={styles.dayText}>{day}:</Text>
    <Text style={styles.timeText}>{time}</Text>
  </View>
);

const DealCard = ({ title, discount, code, description }) => (
  <LinearGradient
    colors={["#7118DE", "#BF4AF1"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    style={styles.dealCard}
  >
    <Text style={styles.dealTitle}>
      {title.includes("Linque") ? (
        <>
          Linque <Text style={styles.dealTitleBold}>Deals</Text>
        </>
      ) : (
        title
      )}
    </Text>

    <View style={styles.dealContent}>
      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>{discount}</Text>
      </View>

      <View style={styles.dealInfo}>
        <Text style={styles.dealCodeLabel}>{description}</Text>
        <Text style={styles.dealCode}>{code}</Text>
      </View>
    </View>
  </LinearGradient>
);

const RestaurantDetail = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const router = useRouter();
  const params = useLocalSearchParams();

  const toggleModal = () => setModalVisible(!isModalVisible);
  const toggleModal2 = () => setModalVisible2(!isModalVisible2);
  const goBack = () => router.back();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Restaurant Details"
        onBack={goBack}
        backgroundImage={require("../../../assets/images/purpleBg.png")}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Restaurant Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/images/food.png")}
            style={styles.restaurantImage}
          />
        </View>

        {/* Restaurant Info Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.titleRow}>
            <Heading style={styles.restaurantName} level={3}>
              {params.label || "Restaurant Name"}
            </Heading>
            <View style={styles.categoryTag}>
              <Text style={styles.categoryText}>Pan-Asian</Text>
            </View>
          </View>

          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            dignissim dolor quis varius faucibus. Mauris sit amet nunc euismod,
            convallis felis ac, vulputate massa.
          </Text>

          {/* Info Buttons Row */}
          <View style={styles.infoButtonsContainer}>
            <InfoButton
              icon={require("../../../assets/images/icons/user.png")}
              label="4 Guests"
            />
            <InfoButton
              icon={require("../../../assets/images/icons/pin.png")}
              label="DHA Phase 8"
            />
            <InfoButton
              icon={require("../../../assets/images/icons/car.png")}
              label="Parking"
            />
            <InfoButton
              icon={require("../../../assets/images/icons/Ellipse.png")}
              label="WiFi"
            />
          </View>

          <Text style={styles.addressText}>
            Address: Creak Side، Abdul Sattar Edhi Ave, D.H.A. Phase 8 Zone C
            Phase 8 Karachi, Sindh 75500
          </Text>
        </View>

        {/* Deals & Info Section */}
        <View style={styles.infoSection}>
          <View>
            {/* Deals Button */}
            <TouchableOpacity
              style={styles.dealsButton}
              activeOpacity={0.8}
              onPress={toggleModal}
            >
              <LinearGradient
                colors={["#7118DE", "#BF4AF1"]}
                style={styles.dealsButtonGradient}
              >
                <Image
                  source={require("../../../assets/images/icons/discount.png")}
                  style={styles.dealsIcon}
                />
                <Text style={styles.dealsButtonText}>
                  View Deals & Discounts
                </Text>
              </LinearGradient>
            </TouchableOpacity>

            {/* Deals Modal */}
            <Modal
              visible={isModalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={toggleModal}
            >
              <View style={styles.modalOverlay}>
                <TouchableOpacity
                  style={styles.modalCloseButton}
                  onPress={toggleModal}
                >
                  <Image
                    source={require("../../../assets/images/icons/close.png")}
                    style={styles.modalCloseIcon}
                  />
                </TouchableOpacity>
                <View style={styles.modalContainer}>
                  <Heading style={styles.modalTitle} level={3}>
                    Deals & Discounts
                  </Heading>

                  <View style={styles.dealsList}>
                    {dealsData.map((deal, index) => (
                      <DealCard
                        key={index}
                        title={deal.title}
                        discount={deal.discount}
                        code={deal.code}
                        description={deal.description}
                      />
                    ))}
                  </View>

                  <TouchableOpacity
                    style={styles.closeButton}
                    onPress={toggleModal}
                  >
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </Modal>

            {/* Hours Card */}
            <View style={styles.infoCard}>
              <View style={styles.cardHeader}>
                <Image
                  source={require("../../../assets/images/icons/clock.png")}
                  style={styles.cardIcon}
                />
                <Text style={styles.cardTitle}>Timing</Text>
              </View>
              {hoursData.map((hour, index) => (
                <OpeningHour key={index} day={hour.day} time={hour.time} />
              ))}
            </View>
          </View>

          {/* Menu Card */}
          <View
            style={{
              flex: 1,
              backgroundColor: "rgba(210, 213, 219, 0.49)",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <View style={styles.cardHeader}>
              <Image
                source={require("../../../assets/images/icons/menuIcon.png")}
                style={styles.cardIcon}
              />
              <Text style={styles.cardTitle}>Menu</Text>
            </View>
            <Image
              source={require("../../../assets/images/menu.png")}
              style={styles.menuImage}
            />
          </View>
        </View>

        {/* Reservation Button */}
        <GradientBtn
          title="Confirm Reservation"
          onPress={() => {
            router.push("/Confirmation");
          }}
          style={styles.reservationButton}
        />
      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  // Container Styles
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollContent: {
    paddingBottom: 100,
    paddingHorizontal: 16,
    marginTop: 20,
  },

  // Image Section
  imageContainer: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  restaurantImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
  },

  // Info Section
  sectionContainer: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F0F0F0",
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  restaurantName: {
    fontSize: 22,
    color: "#1F2937",
    flex: 1,
    fontFamily: "poppins-bold",
  },
  categoryTag: {
    backgroundColor: "#D2D5DB",
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#D2D5DB",
  },
  categoryText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#000",
    fontFamily: "poppins-semibold",
  },
  descriptionText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#000000",
    marginBottom: 16,
    fontFamily: "poppins-medium",
  },
  infoButtonsContainer: {
    flexDirection: "row",
    gap: 2,
    marginBottom: 16,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  infoButton: {
    backgroundColor: "#F3F4F6",
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  infoIcon: {
    width: 15,
    height: 15,
    marginRight: 6,
    tintColor: "#6B7280",
  },
  infoText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#4B5563",
  },
  addressText: {
    fontSize: 13,
    color: "#000",
    lineHeight: 18,
    fontFamily: "poppins-medium",
  },

  // Deals & Info Section
  infoSection: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  dealsButton: {
    borderRadius: 30,
    overflow: "hidden",
    marginBottom: 16,
    fontFamily: "poppins-semibold",
  },
  dealsButtonGradient: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  dealsIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "#FFFFFF",
  },
  dealsButtonText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily: "poppins-semibold",
  },
  infoCard: {
    backgroundColor: "rgba(210, 213, 219, 0.49)",
    borderRadius: 16,
    padding: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#C1C1C1",
  },
  cardIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
    tintColor: "#6B7280",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },
  hourRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  dayText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#4B5563",
  },
  timeText: {
    fontSize: 13,
    color: "#6B7280",
  },
  menuImage: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginTop: 8,
  },

  // Reservation Button
  reservationButton: {
    marginTop: 8,
    marginBottom: 32,
  },

  // Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 24,
    width: "90%",
    maxWidth: 400,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: "poppins-bold",
    color: "#313131",
    marginBottom: 20,
    textAlign: "center",
  },
  dealsList: {
    gap: 16,
    marginBottom: 24,
  },
  dealCard: {
    borderRadius: 12,
    padding: 16,
  },
  dealTitle: {
    fontSize: 16,
    color: "#FFFFFF",
    marginBottom: 12,
  },
  dealTitleBold: {
    fontWeight: "700",
  },
  dealContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  discountBadge: {
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 5,
    paddingVertical: 6,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    minWidth: 40,
  },
  discountText: {
    fontSize: 14,
    fontFamily: "poppins-bold",
    color: "#fff",
  },
  dealInfo: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "rgba(255,255,255,0.4)",
    justifyContent: "space-between",
    borderRadius: 16,
    padding: 8,
  },
  dealCodeLabel: {
    fontSize: 11,
    fontFamily: "poppins-semibold",
    color: "#fff",
    marginBottom: 4,
  },
  dealCode: {
    fontSize: 11,
    fontFamily: "poppins-bold",
    color: "#fff",
  },
  closeButton: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    padding: 14,
    alignItems: "center",
  },
  closeButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4B5563",
  },
  modalCloseButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1,
    padding: 10,
  },
  modalCloseIcon: {
    width: 24,
    height: 24,
    tintColor: "#FFFFFF",
  },
});

export default RestaurantDetail;
