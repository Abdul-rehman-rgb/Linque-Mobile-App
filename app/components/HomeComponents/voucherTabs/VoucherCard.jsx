import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import BottomNav from "../../BottomNav";
import Heading from "../../UI/Heading"; // Assumes Heading renders Text

const data = [
  {
    id: "1",
    title: "Aylanto",
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: require("../../../../assets/images/rest.png"),
  },
  {
    id: "2",
    title: "Sakura",
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: require("../../../../assets/images/rest.png"),
  },
  {
    id: "3",
    title: "CocoChan",
    rating: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: require("../../../../assets/images/rest.png"),
  },
];

export default function VoucherCard() {
  return (
    <>
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <FlatList
          contentContainerStyle={{ padding: 16 }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <View style={{ flex: 1 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={styles.title}>{item.title}</Text>
                </View>

                <Text style={styles.note}>Valid till: Dec 31, 2025</Text>
                <Text style={styles.note}>Valid till: Dec 31, 2025</Text>

                <View style={styles.discountRow}>
                  <Image
                    source={require("../../../../assets/images/icons/discount-coupon.png")}
                    style={styles.discountIcon}
                  />
                  {/* Replace with regular Text if Heading not working */}
                  <Heading style={styles.discountText}>30%</Heading>
                </View>
              </View>

              <Image source={item.image} style={styles.image} />
            </View>
          )}
        />
      </ScrollView>
      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#F1F2F3",
    borderRadius: 12,
    padding: 10,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 4,
  },
  note: {
    fontWeight: "500",
    marginTop: 4,
    color: "#6B7280",
    fontSize: 11,
    textDecorationLine: "underline",
  },
  discountRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  discountIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
  },
  discountText: {
    color: "#6A14DC",
    fontWeight: "900",
  },
  image: {
    width: 121,
    height: 116,
    borderRadius: 10,
    marginLeft: 16,
  },
});
