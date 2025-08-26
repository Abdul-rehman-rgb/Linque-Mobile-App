import { useFonts } from "expo-font";
import { ActivityIndicator, View } from "react-native";
import { FONTS } from "../constant/fonts";

export default function FontLoader({ children }) {
  const [loaded] = useFonts({
    [FONTS.REGULAR]: require("../assets/fonts/Poppins-Regular.ttf"),
    [FONTS.MEDIUM]: require("../assets/fonts/Poppins-Medium.ttf"),
    [FONTS.SEMIBOLD]: require("../assets/fonts/Poppins-SemiBold.ttf"),
    [FONTS.BOLD]: require("../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!loaded) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return children;
}
