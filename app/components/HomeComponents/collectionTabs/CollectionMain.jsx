import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import BottomNav from '../../BottomNav';
const data = [
  {
    id: 1,
    title: "Aylanto",
    date: "13/01/25",
    bgColor: "#1e1e1e", // black
    image: require("../../../../assets/images/rest.png"),
  },
  {
    id: 2,
    title: "Sakura",
    date: "17/01/25",
    bgColor: "#094e46", // green
    image: require("../../../../assets/images/rest.png"),
  },
  {
    id: 3,
    title: "Pogganwala Hut",
    date: "25/01/25",
    bgColor: "#b100b3", // purple
    image: require("../../../../assets/images/rest.png"),
  },
  {
    id: 4,
    title: "",
    date: "",
    bgColor: "#d3d3d3", // gray (empty)
    image: null,
  },
];

const CollectionMain = () => {
  return (
    <>
    <ScrollView contentContainerStyle={{marginBottom: ''}}>
      <View style={styles.container}>
        <View style={styles.grid}>
          {data.map((item) => (
            <View key={item.id} style={styles.cardWrapper}>
              <View style={[styles.card, { backgroundColor: item.bgColor }]}>
                {/* Logo */}
                <Image
                  source={require("../../../../assets/images/pengiun-logo.png")}
                  style={styles.logo}
                />

                {/* Main image */}
                {item.image && (
                  <Image source={item.image} style={styles.mainImage} />
                )}

                {/* Title & Date */}
                {item.title ? (
                  <>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.date}>{item.date}</Text>
                  </>
                ) : null}
              </View>

              {/* Share Button */}
              {item.title ? (
                <TouchableOpacity style={styles.shareBtn}>
                  <Image
                    source={require("../../../../assets/images/icons/share-icon.png")}
                    style={styles.shareIcon}
                  />
                  <Text style={styles.shareText}>Share Memory</Text>
                </TouchableOpacity>
              ) : null}
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
    <BottomNav/>
    </>
  );
};

export default CollectionMain;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  cardWrapper: {
    width: "48%",
    marginBottom: 20,
  },
  card: {
    borderRadius: 12,
    overflow: "hidden",
    alignItems: "center",
    padding: 10,
  },
  logo: {
    height: 28,
    width: 28,
    marginBottom: 5,
  },
  mainImage: {
    width: "100%",
    height: 80,
    resizeMode: "cover",
    borderRadius: 8,
    marginBottom: 5,
  },
  title: {
    color: "white",
    fontWeight: "600",
    fontSize: 11,
    textAlign: "center",
  },
  date: {
    color: "white",
    fontSize: 12,
    marginTop: 2,
    fontWeight: '700',
    textAlign: "center",
  },
  shareBtn: {
    alignItems: "center",
    marginTop: 6,
  },
  shareIcon: {
    height: 20,
    width: 20,
    marginBottom: 2,
    tintColor: "black",
  },
  shareText: {
    fontSize: 12,
    fontWeight: "500",
  },
});
