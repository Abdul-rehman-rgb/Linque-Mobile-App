import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BottomNav from "../components/BottomNav";

const { width } = Dimensions.get("window");

const Explore = () => {
  const trendings = [
    {
      label: "Aylanto",
      img: {
        uri: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "BYOT",
      img: {
        uri: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "KMF",
      img: {
        uri: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "TDF",
      img: {
        uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "TDF",
      img: {
        uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "TDF",
      img: {
        uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "TDF",
      img: {
        uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "TDF",
      img: {
        uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "TDF",
      img: {
        uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "TDF",
      img: {
        uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "TDF",
      img: {
        uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      label: "TDF",
      img: {
        uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80",
      },
    },
  ];

  return (
    <ImageBackground
      source={require("../../assets/images/trendBg.png")}
      style={styles.background}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <Text style={styles.headerText}>Explore More</Text>
        </View>
        <View style={styles.container}>
          {trendings.map((item, idx) => (
            <>
              <View>
                <View key={idx} style={styles.item}>
                  <View style={styles.imageWrapper}>
                    <Image
                      source={item.img}
                      style={styles.itemImage}
                      resizeMode="cover"
                    />
                  </View>
                </View>
                <Text style={styles.itemLabel}>{item.label}</Text>
              </View>
            </>
          ))}
        </View>
      </ScrollView>
      <BottomNav />
    </ImageBackground>
  );
};

export default Explore;

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContent: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#fff",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  item: {
    alignItems: "center",
    marginRight: 16,
    marginBlock: 10
  },
  imageWrapper: {
    width: 97,
    height: 97,
    borderRadius: 9999,
    borderWidth: 4,
    borderColor: "white",
    overflow: "hidden",
    marginBottom: 8,
  },
  itemImage: {
    width: 97,
    height: 97,
  },
  itemLabel: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
});
