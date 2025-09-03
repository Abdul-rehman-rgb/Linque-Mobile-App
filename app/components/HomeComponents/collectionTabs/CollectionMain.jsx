import { FontAwesome } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BottomNav from "../../BottomNav";

const data = [
  {
    id: "1",
    title: "Aylanto",
    rating: 3,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: require("../../../../assets/images/rest.png"),
    disacount: "30%",
  },
  {
    id: "2",
    title: "Sakura",
    rating: 5,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: require("../../../../assets/images/rest.png"),
    disacount: "30%",
  },
  {
    id: "3",
    title: "CocoChan",
    rating: 4,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: require("../../../../assets/images/rest.png"),
    disacount: "30%",
  },
  {
    id: "4",
    title: "Bella Vista",
    rating: 4,
    description: "Experience fine dining with a modern twist...",
    image: require("../../../../assets/images/rest.png"),
    disacount: "25%",
  },
  {
    id: "5",
    title: "Ocean Breeze",
    rating: 5,
    description: "Seafood specialties with ocean views...",
    image: require("../../../../assets/images/rest.png"),
    disacount: "40%",
  },
  {
    id: "6",
    title: "Mountain Grill",
    rating: 4,
    description: "Grilled meats and local specialties...",
    image: require("../../../../assets/images/rest.png"),
    disacount: "35%",
  },
  {
    id: "7",
    title: "Urban Cafe",
    rating: 3,
    description: "Coffee and pastries in a cozy atmosphere...",
    image: require("../../../../assets/images/rest.png"),
    disacount: "20%",
  },
  {
    id: "8",
    title: "Spice Route",
    rating: 5,
    description: "Authentic Asian cuisine with bold flavors...",
    image: require("../../../../assets/images/rest.png"),
    disacount: "45%",
  },
];

const StarRating = ({ rating }) => {
  return (
    <View style={{ flexDirection: "row", marginVertical: 4 }}>
      {[...Array(5)].map((_, i) => (
        <FontAwesome
          key={i}
          name="star"
          size={16}
          color={i < rating ? "#7C3AED" : "#C4C4C4"}
        />
      ))}
    </View>
  );
};

export default function CollectionMain() {
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
                  <StarRating rating={item.rating} />
                </View>
                <Text style={styles.note}>Note:</Text>
                <Text style={styles.desc}>{item.description}</Text>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <Image
                    source={require("../../../../assets/images/icons/discount-coupon.png")}
                    style={{ height: 29, width: 29, marginTop: 5 }}
                  />
                  <Text style={{fontSize: 29,
                    fontFamily: "Poppins-Bold",
                    color: "#6A14DC"
                  }}>
                    {item.disacount}
                  </Text>
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
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    marginBottom: 4,
  },
  note: {
    fontFamily: "Poppins-Medium",
    marginTop: 4,
    color: "#000000",
    fontSize: 11,
    textDecorationLine: "underline",
  },
  desc: {
    fontSize: 14,
    color: "#000000",
    fontFamily: "Poppins-Medium",
  },
  image: {
    width: 121,
    height: 116,
    borderRadius: 10,
    marginLeft: 16,
  },
});
