import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Or react-native-linear-gradient

const DatePickerBtn = ({
  initialDate = new Date(),
  onDateChange,
  icon,
  buttonStyle,
  textStyle,
}) => {
  const [date, setDate] = useState(initialDate);
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  const handleChange = (event, pickedDate) => {
    setShow(false);
    if (pickedDate) {
      setDate(pickedDate);
      const formatted = pickedDate.toDateString();
      setSelectedDate(formatted);
      if (onDateChange) onDateChange(pickedDate);
    }
  };

  return (
    <>
      <TouchableOpacity onPress={() => setShow(true)} activeOpacity={0.8}>
        <LinearGradient
          colors={["#7118DE", "#BF4AF1"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[styles.button, buttonStyle]}
        >
          {icon && <Image source={icon} style={styles.icon} />}
          <Text style={[styles.text, textStyle]}>
            {selectedDate || "Select Date"}
          </Text>
        </LinearGradient>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleChange}
        />
      )}
    </>
  );
};

export default DatePickerBtn;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
  },
  icon: {
    width: 10,
    height: 10,
    marginRight: 6,
    resizeMode: "contain",
  },
  text: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "500",
  },
});
