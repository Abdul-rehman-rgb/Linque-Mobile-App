import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import BottomNav from "../../components/BottomNav";
import Heading from "../../components/UI/Heading";

const LiveChat = () => {
  return (
    <>
    <View style={{ flex: 1, backgroundColor: "#fff", paddingHorizontal: 16 }}>
      {/* Title */}
      <Heading style={styles.heading} level={3}>
        Can I edit my Booking?
      </Heading>

      {/* Chat bubble */}
      <LinearGradient
        colors={["#7118DE", "#BF4AF1"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }} // left to right gradient
        style={styles.gradient}
      >
        <View style={styles.chatRow}>
          {/* Agent Avatar */}
          <Image
            source={require("../../../assets/images/pengiun-logo.png")}
            resizeMode="contain"
            style={styles.avatar}
          />

          {/* Chat Content */}
          <View style={styles.chatContent}>
            {/* Agent Name */}
            <Text style={styles.agentName}>Agent 4</Text>

           <View style={{backgroundColor: '#fff', borderRadius: 8, padding: 10}}>
             {/* Message */}
            <Text style={styles.message}>
              Welcome to Live Chat Support. Please let us know your concern.
            </Text>

            {/* Time + Seen */}
            <View style={styles.footerRow}>
              <Text style={styles.time}>02:55 PM</Text>
              <Image
                source={require("../../../assets/images/icons/seen.png")}
                resizeMode="contain"
                style={styles.seenIcon}
              />
            </View>
           </View>
         
          </View>
          
        </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 30}}>
            <TextInput style={{borderRadius: 17, backgroundColor: "#FFFFFF", padding: 10, flex:1}} placeholder="Type you message here..." />
            <TouchableOpacity>
              <Image source={require('../../../assets/images/icons/sent.png')} resizeMode="contain" />
            </TouchableOpacity>
           </View>
      </LinearGradient>
    </View>
    <BottomNav/>
    </>
  );
};

export default LiveChat;

const styles = StyleSheet.create({
  heading: {
    color: "#000",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10
  },
  gradient: {
    padding: 12,
    borderRadius: 15,
  },
  chatRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  avatar: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  chatContent: {
    flex: 1,
    minHeight: 450
  },
  agentName: {
    fontFamily: "Poppins-Medium",
    color: "#fff",
    marginBottom: 4,
    fontSize: 13
  },
  message: {
    color: "#6A14DC",
    marginBottom: 6,
    fontSize: 11,
    fontFamily: "Poppins-SemiBold"
  },
  footerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'flex-end',
    gap: 6,
  },
  time: {
    fontSize: 12,
    color: "#ddd",
  },
  seenIcon: {
    width: 14,
    height: 14,
  },
});
