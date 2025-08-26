import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import DatePickerButton from "..//UI/DatePickerBtn";

const BookingCard = ({ title, bgImage, ratingImage }) => {
  return (
    <View style={styles.wrapper}>
      <ImageBackground
        source={bgImage}
        resizeMode="cover"
        style={styles.bg}
      >
        <View style={styles.topRow}>
          <Text style={styles.title}>{title}</Text>
          <Image source={ratingImage} style={styles.icon} />
        </View>

        <View style={styles.btnRow}>
          <DatePickerButton />
          <DatePickerButton />
        </View>
      </ImageBackground>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#DCDCDC",
    borderColor: "#707070",
    borderWidth: 1,
    padding: 5,
    borderRadius: 10,
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
  },
});
