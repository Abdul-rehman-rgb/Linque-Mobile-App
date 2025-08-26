import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const RestaurantMain = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Help Centre for: {id}</Text>
    </View>
  );
}
export default RestaurantMain;
