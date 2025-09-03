import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const BottomNav = () => {
    const router = useRouter();
  
  const HandlePress = () => {
    router.push('/HelpCentre')
  }
  return (
    <View style={styles.bottomNav}>
        <TouchableOpacity onPress={() => router.push('/(home)/home')} style={styles.bottomLeft}>
          <Image
            source={require("@/assets/images/pengiun-logo.png")}
            style={styles.bottomLogo}
          />
          <View>
            <Text style={styles.bottomTitle}>LINQUE</Text>
            <Text style={styles.bottomSubtitle}>Elevate Your Outings</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomButton} onPress={HandlePress}>
          <FontAwesome5 name="headset" size={24} color="#fff" />
          <Text style={styles.bottomButtonText}>Help Centre</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton} onPress={() => {router.push('/Setting')}}>
          <Ionicons name="settings" size={26} color="#fff" />
          <Text style={styles.bottomButtonText}>Settings</Text>
        </TouchableOpacity>
      </View>
      
  )
}

export default BottomNav

const styles = StyleSheet.create({
    bottomNav: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "black",
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        paddingHorizontal: 24,
        paddingVertical: 12,
        zIndex: 50,
      },
      bottomLeft: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
      },
      bottomLogo: {
        width: 48,
        height: 48,
      },
      bottomTitle: {
        color: "white",
        fontWeight: "800",
        fontSize: 20,
        lineHeight: 34,
        fontFamily: "GoodTimes",
        letterSpacing: 10
      },
      bottomSubtitle: {
        color: "white",
        fontSize: 10,
        opacity: 0.7,
        marginTop: -4,
        fontFamily: "GoodTimes",
      },
      bottomButton: {
        alignItems: "center",
      },
      bottomButtonText: {
        color: "white",
        fontSize: 12,
        marginTop: 4,
      },
})