import { useRouter } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

export default function HomeStories() {
  const router = useRouter();

  const trending = [
    {
      id: "1",
      label: "Aylanto",
      img: {
        uri: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      id: "2",
      label: "BYOT",
      img: {
        uri: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      id: "3",
      label: "KMF",
      img: {
        uri: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      id: "4",
      label: "TDF",
      img: {
        uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      id: "5",
      label: "TDF",
      img: {
        uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80",
      },
    },
    {
      id: "6",
      label: "TDF",
      img: {
        uri: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=400&q=80",
      },
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.imageWrapper}>
        <Image
          source={item.img}
          style={styles.itemImage}
          resizeMode="cover"
        />
      </View>
      <Text style={styles.itemLabel}>{item.label}</Text>
    </View>
  );

  return (
    <ImageBackground
      source={require("../../../assets/images/trendBg.png")}
      style={styles.absoluteBackground}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <View style={styles.headerRow}>
          <Text style={styles.headerText}>Top Trending</Text>
          <TouchableOpacity onPress={() => {
           console.log("Explore More button pressed");
           console.log("Attempting to navigate to Explore");
           router.push("Explore");
           console.log("router.push called");
         }}>
            <Text style={styles.exploreText}>Explore More</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={trending}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.scrollContainer}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  absoluteBackground: {
    width: '100%',
    height: 200,
    backgroundColor: "#000",
    zIndex: -1,
  },
  overlay: {
    paddingBottom: 16,
    marginTop: 20,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "700",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
    fontFamily: "poppins-bold"
  },
  exploreText: {
    color: "white",
    fontWeight: "600",
    textDecorationLine: "underline",
     fontFamily: "poppins-semibold"
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingTop: 8,
  },
  item: {
    alignItems: "center",
    marginRight: 16,
  },
  imageWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "white",
    overflow: "hidden",
    marginBottom: 8,
  },
  itemImage: {
    width: "100%",
    height: "100%",
  },
  itemLabel: {
    color: "white",
    fontWeight: "600",
    fontSize: 12,
    textAlign: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
     fontFamily: "poppins-semibold"
  },
});
