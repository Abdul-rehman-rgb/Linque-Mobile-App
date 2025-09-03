import { StyleSheet, View } from "react-native";
import BookingCard from "../../../components/HomeComponents/BookingCard";
import BottomNav from "../../BottomNav";
import Heading from "../../UI/Heading";

const BookingMain = () => {
  return (
    <>
      <View style={styles.container}>
        <Heading style={styles.heading} level={3}>
          Upcoming Bookings
        </Heading>

        <View
          style={{
            backgroundColor: "#DCDCDC",
            borderColor: "#707070",
            borderWidth: 1,
            padding: 5,
            borderRadius: 10,
          }}
        >
          <BookingCard
            title="Aylanto"
            bgImage={require("../../../../assets/images/booking.png")}
            ratingImage={require("../../../../assets/images/icons/rating.png")}
          />

          <BookingCard
            title="Sakura"
            bgImage={require("../../../../assets/images/booking.png")}
            ratingImage={require("../../../../assets/images/icons/rating.png")}
          />
        </View>
        <Heading style={styles.heading} level={3}>
          Past Bookings
        </Heading>
        <View
          style={{
            backgroundColor: "#DCDCDC",
            borderColor: "#707070",
            borderWidth: 1,
            padding: 5,
            borderRadius: 10,
          }}
        >
          <BookingCard
            title="Aylanto"
            bgImage={require("../../../../assets/images/booking.png")}
            ratingImage={require("../../../../assets/images/icons/rating.png")}
          />
           <BookingCard
            title="Sakura"
            bgImage={require("../../../../assets/images/booking.png")}
            ratingImage={require("../../../../assets/images/icons/rating.png")}
          />
        </View>
      </View>
      <BottomNav />
    </>
  );
};

export default BookingMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  heading: {
    color: "#000",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10
  },
});
