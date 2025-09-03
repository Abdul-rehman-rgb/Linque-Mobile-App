import DateTimePicker from "@react-native-community/datetimepicker";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { useState } from "react";
import {
  Alert,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useUserData } from "../../../context/UserContext";
import BottumNav from "../../components/BottomNav";
import MyCalendar from "../../components/HomeComponents/MyCalendar";
import GradientBtn from "../../components/UI/GradientBtn";
import Header from "../../components/UI/Header";

const Confirmation = () => {
  const router = useRouter();
  const { id: restaurantId } = useLocalSearchParams();


  const { bookReservation } = useUserData();

  const [selectedDate, setSelectedDate] = useState(new Date(2025, 1, 13));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState("12:30 PM");
  const [seats, setSeats] = useState(3);
  const [promo, setPromo] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(false);

  const times = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM"];

  const onDateChange = (event, date) => {
    setShowDatePicker(Platform.OS === "ios");
    if (date) {
      setSelectedDate(date);
    }
  };

  const convertTo24Hour = (time12h) => {
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");
    hours = parseInt(hours, 10);
    if (modifier === "PM" && hours < 12) hours += 12;
    if (modifier === "AM" && hours === 12) hours = 0;
    return `${hours.toString().padStart(2, "0")}:${minutes}`;
  };

  const handleBooking = async () => {
    try {
      setLoading(true);
      const formattedDate = selectedDate.toISOString().split("T")[0];
      const formattedTime = convertTo24Hour(selectedTime);
      const res = await bookReservation({
        restaurantId,
        reservationDate: formattedDate,
        reservationTime: formattedTime,
        numberOfPersons: seats,
        notes: note,
        promoCode: promo,
      });


      if (res.success) {
        Alert.alert("✅ Success", "Your reservation has been booked!");
        router.push("/Processing");
      } else {
        Alert.alert("⚠️ Failed", res.message || "Something went wrong");
      }
    } catch (error) {
      console.error("Booking error:", error);
      Alert.alert("❌ Error", error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Restaurant 1"
        onBack={() => router.back()}
        backgroundImage={require("../../../assets/images/1.png")}
      />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >

        <MyCalendar />


        <View style={styles.datePickerWrapper}>
          <Text style={styles.selectedDateText}>
            {selectedDate.toDateString()}
          </Text>
          <TouchableOpacity
            style={styles.datePickerButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.datePickerButtonText}>Change Date</Text>
          </TouchableOpacity>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display={Platform.OS === "ios" ? "spinner" : "default"}
              onChange={onDateChange}
              minimumDate={new Date()}
              textColor="#6A14DC"
              themeVariant="light"
            />
          )}
        </View>




        <View style={styles.section}>
          <Text style={styles.sectionLabel}>🕐 Time</Text>
          <View style={styles.selectionBox}>
            <TouchableOpacity
              onPress={() => {
                const i = times.indexOf(selectedTime);
                setSelectedTime(times[Math.max(0, i - 1)]);
              }}
              style={styles.chevronButton}
            >
              <ChevronLeft size={24} color="#6A14DC" />
            </TouchableOpacity>
            <Text style={styles.selectionText}>{selectedTime}</Text>
            <TouchableOpacity
              onPress={() => {
                const i = times.indexOf(selectedTime);
                setSelectedTime(times[Math.min(times.length - 1, i + 1)]);
              }}
              style={styles.chevronButton}
            >
              <ChevronRight size={24} color="#6A14DC" />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.section}>
          <Text style={styles.sectionLabel}>👥 Seats</Text>
          <View style={styles.selectionBox}>
            <TouchableOpacity
              onPress={() => setSeats(Math.max(1, seats - 1))}
              style={styles.chevronButton}
            >
              <ChevronLeft size={24} color="#6A14DC" />
            </TouchableOpacity>
            <Text style={styles.selectionText}>
              {seats.toString().padStart(2, "0")}
            </Text>
            <TouchableOpacity
              onPress={() => setSeats(seats + 1)}
              style={styles.chevronButton}
            >
              <ChevronRight size={24} color="#6A14DC" />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.inputWrapper}>
          <Text style={styles.sectionLabel}>Promo Code</Text>
          <TextInput
            value={promo}
            onChangeText={setPromo}
            placeholder="*********"
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />
        </View>


        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Note for Restaurant:</Text>
          <TextInput
            value={note}
            onChangeText={setNote}
            placeholder="Any special request..."
            placeholderTextColor="#9CA3AF"
            style={styles.input}
          />
        </View>


        <View style={styles.buttonWrapper}>
          <GradientBtn
            title={loading ? "Booking..." : "Check Availability"}
            style={styles.gradientButton}
            onPress={handleBooking}
          />
        </View>
      </ScrollView>

      
      <BottumNav />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF" },
  scrollContent: { paddingBottom: 120, paddingHorizontal: 16, marginTop: 10 },
  datePickerWrapper: {
    alignItems: "center",
    marginVertical: 20,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  selectedDateText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4B5563",
    marginBottom: 10,
    textAlign: "center",
  },
  datePickerButton: {
    backgroundColor: "#6A14DC",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    marginTop: 10,
  },
  datePickerButtonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "600",
  },
  section: { marginTop: 20, paddingHorizontal: 16 },
  sectionLabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#6A14DC",
    marginBottom: 10,
    textAlign: "center",
  },
  selectionBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 20,
  },
  chevronButton: { padding: 8 },
  selectionText: {
    fontSize: 15,
    fontWeight: "500",
    color: "#000000",
    flex: 1,
    textAlign: "center",
  },
  inputWrapper: { marginTop: 20, paddingHorizontal: 16, width: "100%" },
  inputLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#000000",
    marginBottom: 8,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#F3F4F6",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: "#111827",
    textAlign: "center",
  },
  buttonWrapper: { marginTop: 30, paddingHorizontal: 16 },
  gradientButton: { width: "100%" },
});

export default Confirmation;
