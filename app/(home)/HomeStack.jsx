import { useRouter } from "expo-router";
import { ScrollView, StyleSheet, View } from "react-native";
import BottomNav from "../components/BottomNav";
import HomeStories from "../components/HomeComponents/HomeStories";
import HubCard from "../components/HomeComponents/HubCard";
import HubData from "../components/HomeComponents/HubData";
import Heading from "../components/UI/Heading";

const HomeStack = ({route}) => {
  const router = useRouter();

  return (
    // <ImageBackground source={require("../../assets/images/trendBg.png")} style={{position: 'relative'}}>

    <ScrollView>
      <HomeStories />

      <View style={styles.container}>
        {/* Stories */}

        {/* HUB Section */}
        <View style={styles.hubSection}>
          <Heading style={styles.hubTitle}>HUB</Heading>
          <View style={styles.hubCardsWrapper}>
            {HubData.map((card, idx) => (
              <HubCard
                key={idx}
                title={card.title}
                subtitle={card.subtitle}
                img={card.img}
                route={`/(restaurant)`}

              />
            ))}
          </View>
        </View>
      </View>
      <BottomNav />
    </ScrollView>

    // </ImageBackground>
  );
};

export default HomeStack;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hubSection: {
    flex: 1,
    backgroundColor: "white",
    marginTop: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBlock: 60,
  },
  hubTitle: {
    fontSize: 23,
    fontWeight: "800",
    color: "#111",
    marginBottom: 12,
    textAlign: "center",
    letterSpacing: 0.6,
    fontFamily: 'poppins-bold'
  },
  hubCardsWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});
