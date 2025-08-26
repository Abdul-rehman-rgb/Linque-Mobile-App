import { StyleSheet } from "react-native";
import TopTabs from "../components/HomeComponents/bookinghistorytabs/TopTabs";
const BookingHistory = () => {

  return (
    // <ScrollView style={styles.scrollContainer}>
    //   <View style={styles.container}>
    //     <MyCalendar />
    //     <View style={styles.buttonRow}>
    //       <GradientBtn style={styles.button} title="Add New Card" />
    //       <GradientBtn title="Remove Card" />
    //     </View>
    //   </View>
    //   <View style={styles.container}>
    //     <Heading level={3} style={styles.heading}>
    //       My Waitlist
    //     </Heading>
    //     <WaitlistList data={trending} />
    //   </View>
    //   <BottomNav/>
    // </ScrollView>
    <TopTabs />
  );
};

export default BookingHistory;

const styles = StyleSheet.create({
  scrollContainer: { backgroundColor: "#fff" },
  container: { flex: 1, paddingHorizontal: 20, paddingTop: 10, borderTopColor: '#E6E6E6', borderWidth: 0.5 },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 16,
  },
  button: {
    marginRight: 10,
  },
  heading: {
    color: "#000",
    fontSize: 18,
    fontWeight: "700",
    textDecorationLine: "underline",
    textAlign: "center",
    marginBottom: 16,
  },
});
