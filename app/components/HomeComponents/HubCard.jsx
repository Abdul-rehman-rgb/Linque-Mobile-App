import { useRouter } from "expo-router";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const HubCard = ({ title, subtitle, img, route }) => {
  const router = useRouter();

  return (
    <View style={styles.card}>
      <ImageBackground source={img} style={styles.cardImage} resizeMode="cover">
        <View style={styles.cardOptionsBadge}>
          <Text style={styles.cardOptionsBadgeText}>+10 Options</Text>
        </View>
        <View style={styles.cardContent}>
          <View>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardSubtitle}>{subtitle}</Text>
          </View>
          <TouchableOpacity
            style={styles.bookButton}
            onPress={() => router.push(route)}
          >
            <Text style={styles.bookButtonText}>Book Now</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "48%",
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 16,
    height: 236,
  },
  cardImage: {
    width: "100%",
    flex: 1,
    justifyContent: "flex-end", // moves content to bottom
  },
  cardOptionsBadge: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: "#6A14DC",
    borderRadius: 9999,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  cardOptionsBadgeText: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
    fontFamily: "poppins-medium"
  },
  cardContent: {
    padding: 12,
    justifyContent: "space-between",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    alignItems: "flex-end"
  },
  cardTitle: {
    color: "white",
    fontSize: 15,
    fontWeight: "semibold",
    marginBottom: 4,
    fontFamily: "poppins-semibold"
  },
  cardSubtitle: {
    color: "white",
    fontSize: 12,
    fontFamily: "poppins-medium"
  },
  bookButton: {
    backgroundColor: "#6A14DC",
    borderRadius: 9999,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "flex-start",
    marginTop: 8,
  },
  bookButtonText: {
    color: "white",
    fontWeight: "semibold",
    fontSize: 14,
  },
});

export default HubCard;
