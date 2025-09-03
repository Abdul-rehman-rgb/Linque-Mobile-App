import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import DatePickerButton from "../UI/DatePickerBtn"; // fixed double slash

// Import icons
import calendarIcon from "../../../assets/images/icons/calendar2.png";

const BookingCard = ({ title, bgImage, ratingImage }) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground source={bgImage} resizeMode="cover" style={styles.bg}>
        <View style={styles.topRow}>
          <Text style={styles.title}>{title}</Text>
          <Image source={ratingImage} style={styles.icon} />
        </View>
        <View style={styles.btnRow}>
          <DatePickerButton
            icon={calendarIcon}
            buttonStyle={styles.smallBtn}
          />
          <DatePickerButton
            icon={calendarIcon}
            buttonStyle={styles.smallBtn}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  wrapper: {
   padding: 5
  },
  bg: {
    padding: 15,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 10,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FBFBFB",
  },
  icon: {
    width: 92,
    height: 20,
    resizeMode: "contain",
  },
  btnRow: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center"
  },
  smallBtn: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
});
