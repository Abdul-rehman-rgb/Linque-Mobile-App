import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import Heading from "../../components/UI/Heading";

const BusinesCenter = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const faqs = [
    {
      question: "Lorem ipsum dolor sit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim dolor quis varius faucibus.",
    },
    {
      question: "Lorem ipsum dolor sit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim dolor quis varius faucibus.",
    },
    {
      question: "Lorem ipsum dolor sit?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim dolor quis varius faucibus.",
    },
  ];

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Intro Section */}
      <View style={styles.introContainer}>
          <Heading
            style={{
              fontSize: 20,
              fontWeight: "700",
              color: "black",
              textAlign: "center",
            }}
          >
            What's new on <Text style={{ fontWeight: "300" }}>Linque?</Text>
          </Heading>
      </View>

      {/* FAQ Accordion */}
      {faqs.map((faq, index) => (
        <View key={index} style={styles.faqItem}>
          <TouchableOpacity
            style={styles.faqHeader}
            onPress={() => toggleExpand(index)}
          >
            <Text style={styles.faqQuestion}>{faq.question}</Text>
            <AntDesign
              name={expandedIndex === index ? "up" : "down"}
              size={18}
              color="#000"
            />
          </TouchableOpacity>
          {expandedIndex === index && (
            <Text style={styles.faqAnswer}>{faq.answer}</Text>
          )}
        </View>
      ))}

      {/* Visit Website Button */}
      <TouchableOpacity activeOpacity={0.8} style={styles.buttonWrapper}>
        <LinearGradient
          colors={["#7118DE", "#BF4AF1"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Visit Our Website</Text>
        </LinearGradient>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BusinesCenter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
  },
  introContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  introTitle: {
    fontSize: 16,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 6,
  },
  introText: {
    fontSize: 13,
    color: "#555",
    textAlign: "center",
    lineHeight: 18,
  },
  faqItem: {
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 12,
  },
  faqHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  faqQuestion: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000",
  },
  faqAnswer: {
    marginTop: 8,
    fontSize: 13,
    color: "#555",
    lineHeight: 18,
  },
  buttonWrapper: {
    marginTop: 30,
    marginBottom: 40,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "600",
  },
});
