import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { Platform } from "react-native";
import GradientBtn from "../UI/GradientBtn";

const DatePickerBtn = ({ initialDate = new Date(), onDateChange }) => {
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
      <GradientBtn title={selectedDate || "Select Date"} onPress={() => setShow(true)} />
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
