// screens/HelpCentre.js

import { useRouter } from "expo-router";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BottomNav from "../../components/BottomNav";
import GradientBtn from "../../components/UI/GradientBtn";

const faqData = [
  {
    id: "1",
    question: "Can I edit my Booking?",
    route: "/HelpCentre/EditBooking",
  },
  {
    id: "2",
    question: "Can I cancel my Booking?",
    route: "/HelpCentre/CancelBooking",
  },
  {
    id: "3",
    question: "How can I share my E-Ticket?",
    route: "/HelpCentre/Eticket",
  },
  {
    id: "4",
    question: "How can I get a refund?",
    route: "/HelpCentre/Eticket",
  },
  { id: "5", question: "Invite Friends?", route: "/HelpCentre/Refund" },
  { id: "6", question: "General FAQ’s", route: "/HelpCentre/Faq" },
  // { id: "7", question: "General ddddd", route: "Chat" },
];

const HelpCentre = () => {
  //const router = useNavigation();
  const router = useRouter();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => router.push(item.route)}
    >
      <Text style={styles.question}>{item.question}</Text>
      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  );

  return (
    <>
    <ScrollView contentContainerStyle={{paddingVertical: 16, marginBottom: 70}}>
      <View style={styles.container}>
      {/* Title */}
      <Text style={styles.sectionTitle}>How may we assist you?</Text>

      {/* List */}
      <FlatList
        data={faqData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
      <View
        style={{
          justifyContent: "center",
          paddingHorizontal: 16,
          alignContent: "center",
          alignItems: "center",
          gap: 2,
          backgroundColor: "#fff"
        }}
      >
        <View style={{marginVertical: 10}}>
          <TouchableOpacity
            style={{
              backgroundColor: "#134C46",
              borderRadius: 100,
              padding: 10,
              textAlign: "center",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
              width: 215,
            }}
            onPress={() => {
              router.push("/HelpCentre/LiveChat");
            }}
          >
            <Text style={{ fontSize: 16, fontFamily: "Poppins-SemiBold", color: "white" }}>
              Live Chat Support
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Poppins-Medium",
              color: "#000000",
              textDecorationLine: "underline",
            }}
          >
            Get assistance from one of our agents
          </Text>
        </View>
        <GradientBtn style={{ width: 358 }} title={"Business Centre"} onPress={() => {
              router.push("/HelpCentre/BusinesCenter");
            }} />
        <Text
          style={{ fontSize: 14, fontFamily: "Poppins-Medium", textAlign: "center" }}
        >
          Want your business on Linque? Visit our Business Centre for queries.
        </Text>
      </View>
    </View>
    </ScrollView>
    <BottomNav />
</>
  );
};

export default HelpCentre;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
    color: "#000",
  },
  listContainer: {
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 0.6,
    borderBottomColor: "#ddd",
  },
  question: {
    fontSize: 17,
    fontFamily: "Poppins-SemiBold",
    color: "#000000",
  },
  arrow: {
    fontSize: 20,
    color: "#00000",
  },
});
