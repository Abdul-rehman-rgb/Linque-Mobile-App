import { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import BottomNav from "../components/BottomNav";
import EditableInput from "../components/UI/EditableInput";
import GradientBtn from "../components/UI/GradientBtn";
import Heading from "../components/UI/Heading";
import LightBtn from "../components/UI/LightBtn";
import RadioButton from "../components/UI/RadioButton";

const MyCard = () => {
  const [selectedOption, setSelectedOption] = useState("male");

  const handleAddCard = () => {
    console.log("object");
  };

  return (
    <>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <View style={styles.container}>
          <Heading
            style={{
              color: "#000",
              fontWeight: "800",
              textAlign: "center",
              marginBottom: 5,
            }}
            level={3}
          >
            Primary Card Details
          </Heading>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Card Number</Text>
            <EditableInput
              style={styles.textInput}
              placeholderTextColor="#444444"
              placeholder="Enter your CNIC"
              keyboardType="numeric"
            />
          </View>

          <View style={[styles.row, styles.inputGroup]}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.label}>Gender</Text>
              <EditableInput
                style={styles.textInput}
                placeholderTextColor="#444444"
                placeholder="Male / Female"
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Age</Text>
              <EditableInput
                style={styles.textInput}
                placeholderTextColor="#444444"
                placeholder="Enter your age"
                keyboardType="numeric"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <RadioButton
              selected={selectedOption === "male"}
              onPress={() => setSelectedOption("male")}
              label="Keep card details saved"
            />
          </View>

          <View style={[styles.inputGroup, { flexDirection: "row" }]}>
            <LightBtn
              title="Done"
              style={{ flex: 1 }}
              onPress={() => console.log("click")}
            />
          </View>

          <View style={[styles.row, styles.inputGroup]}>
            <GradientBtn
              style={{ marginRight: 10 }}
              title="Add New Card"
              onPress={handleAddCard}
            />
            <GradientBtn title="Remove Card" onPress={handleAddCard} />
          </View>

          <Heading
            style={{
              color: "#000",
              fontWeight: "800",
              marginBottom: 5,
              textAlign: "center",
            }}
            level={3}
          >
            Secondary Card Details
          </Heading>

          {[1, 2, 3].map((_, index) => (
            <View key={index} style={styles.inputGroup}>
              <EditableInput
                style={styles.textInput}
                placeholderTextColor="#444444"
                placeholder="Enter your age"
                keyboardType="numeric"
              />
              <RadioButton
                selected={selectedOption === "male"}
                onPress={() => setSelectedOption("male")}
                label="Keep card details saved"
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <BottomNav />
    </>
  );
};

export default MyCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
    textAlign: "center",
    justifyContent: "center",
    alignContent: "center",
  },
  label: {
    color: "#000000",
    fontSize: 17,
    marginBottom: 4,
    fontWeight: "700",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputGroup: {
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: "#B1B1B1",
    borderColor: "rgba(49, 49, 49, 0.4)",
    height: 50
  },
});
