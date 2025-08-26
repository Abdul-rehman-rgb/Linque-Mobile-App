import { useRouter } from "expo-router";
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

import BottomNav from "../../components/BottomNav";
import HomeStories from "../../components/HomeComponents/HomeStories";
import WaitlistCard from "../../components/HomeComponents/WaitlistCard";
import trending from "../../components/trendingData";
import Header from "../../components/UI/Header";

const { width } = Dimensions.get("window");

const index = () => {
  // const { id } = useLocalSearchParams();
  // const [selectedDate, setSelectedDate] = useState("2025/02/13");
  // const [selectedTime, setSelectedTime] = useState("12:30 PM");
  // const [seats, setSeats] = useState(3);
  // const [promo, setPromo] = useState("");
  // const [note, setNote] = useState("");

  // const times = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"];

  const goBack = () => router.back();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title={`Restaurant`}
        onBack={goBack}
        backgroundImage={require("../../../assets/images/purpleBg.png")}
      />

      <ScrollView
        contentContainerStyle={{}}
        showsVerticalScrollIndicator={false}
      >
        <HomeStories />
        <View
          style={{
            paddingBottom: 120,
            marginTop: 7,
            gap: 20,
            paddingHorizontal: 16,
          }}
        >
          {/* onBookPress={()=>{router.push('RestaurantDetail')}} */}
          {trending.map((item, idx) => (
            <>
              <WaitlistCard
                label={item.label}
                startDate={item.startDate}
                onBookPress={() =>
                  router.push({
                    pathname: "/RestaurantDetail",
                    params: {
                      id: item.id,
                      label: item.label,
                    },
                  })
                }
              />
            </>
          ))}
        </View>
      </ScrollView>
      <BottomNav />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    //backgroundColor: "#8B5CF6",
    // borderBottomLeftRadius: 24,
    // borderBottomRightRadius: 24,
    // paddingBottom: 24,
    // paddingTop: 48,
    paddingHorizontal: 20,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  backButton: { flexDirection: "row", alignItems: "center" },
  backText: { color: "white", fontSize: 16, marginLeft: 8 },
  headerTitle: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
  },
  datePickerWrapper: { marginTop: 24, paddingHorizontal: 16 },
  section: { paddingHorizontal: 24, marginTop: 16 },
  sectionLabel: {
    textAlign: "center",
    color: "#8B5CF6",
    fontWeight: "bold",
    marginBottom: 8,
  },
  selectionBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F3F4F6",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 999,
  },
  selectionText: { fontSize: 16, color: "#8B5CF6", fontWeight: "600" },
  inputWrapper: { paddingHorizontal: 24, marginTop: 24 },
  inputLabel: { color: "#8B5CF6", fontWeight: "bold", marginBottom: 6 },
  input: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 999,
    color: "#111",
  },
  noteInput: { borderRadius: 16 },
  buttonWrapper: { paddingHorizontal: 24, marginTop: 32 },
  primaryButton: {
    backgroundColor: "#8B5CF6",
    paddingVertical: 16,
    borderRadius: 999,
    alignItems: "center",
  },
  primaryButtonText: { color: "white", fontWeight: "bold", fontSize: 16 },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "black",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  bottomLeft: { flexDirection: "row", alignItems: "center", gap: 8 },
  bottomLogoCircle: {
    backgroundColor: "white",
    width: 48,
    height: 48,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
  },
  bottomLogoEmoji: { color: "#8B5CF6", fontWeight: "bold" },
  bottomBrand: {
    color: "white",
    fontWeight: "900",
    fontSize: 18,
    lineHeight: 20,
  },
  bottomTagline: { color: "white", fontSize: 12, opacity: 0.7, marginTop: -2 },
  bottomLink: { color: "white" },
});
