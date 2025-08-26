// components/WaitlistCard.js

import { useRouter } from "expo-router";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import GradientBtn from "../UI/GradientBtn";

const WaitlistCard = ({ label, startDate, onBookPress, item }) => {
  const router = useRouter();
  return (
    <ImageBackground
      source={require("../../../assets/images/waitlist.png")}
      style={styles.imageBackground}
      imageStyle={styles.imageStyle}
    >
      <View style={styles.cardContent}>
        <View style={styles.discountBox}>
          <Image
            style={styles.discountIcon}
            source={require("../../../assets/images/icons/discount.png")}
          />
          <Text style={styles.discountText}>40% Off</Text>
        </View>
        <TouchableOpacity>
          <Image
            style={styles.heartIcon}
            source={require("../../../assets/images/icons/heart.png")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.overlay}>
        <View>
          <Text style={styles.eventTitle}>{label}</Text>
          <Text style={styles.eventDate}>{startDate}</Text>
          <Text style={styles.eventType}>(Concert)</Text>
        </View>
        <GradientBtn
          title="Book Now"
          style={styles.bookBtn}
          onPress={()=> onBookPress(item)}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 200,
    justifyContent: "space-between",
    marginRight: 15,
    marginBottom: 10,
  },
  imageStyle: {
    borderRadius: 12,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  discountBox: {
    backgroundColor: "#6A14DC",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  discountIcon: {
    width: 18,
    height: 18,
    marginRight: 6,
  },
  discountText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
    fontFamily: "poppins-medium"
  },
  heartIcon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    fontFamily: "poppins-semibold"
  },
  eventDate: {
    fontSize: 13,
    color: "#fff",
    marginTop: 4,
    fontFamily: "poppins-medium"
  },
  eventType: {
    fontSize: 12,
    color: "#ccc",
  },
  bookBtn: {
    paddingVertical: 6,
    paddingHorizontal: 5,
    width: 130,
  },
});

export default WaitlistCard;
