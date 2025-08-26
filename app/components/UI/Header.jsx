// components/Header.js
import { ArrowLeft } from "lucide-react-native";
import {
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const Header = ({ title, onBack, backgroundImage }) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <ArrowLeft size={24} color="white" />
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
       
      </View>
      <View style={{justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center'}}>
         <Text style={styles.headerTitle}>{title}</Text>
       </View>
    </ImageBackground>
  );
};

export default Header;

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    paddingBottom: 24,
    paddingTop: 48,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  header: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: { flexDirection: "row", alignItems: "center" },
  backText: { color: "white", fontSize: 16, marginLeft: 8 },
  headerTitle: {
    color: "#FBFBFB",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: -25,
  },
});
