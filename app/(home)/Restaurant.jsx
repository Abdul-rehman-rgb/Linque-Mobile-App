import { createNativeStackNavigator } from "@react-navigation/native-stack";
import index from "./(restaurant)";
import BookingSummary from "./(restaurant)/BookingSummary";
import Confirmation from "./(restaurant)/Confirmation";
import Processing from "./(restaurant)/Processing";
import RestaurantDetail from "./(restaurant)/RestaurantDetail";

const Stack = createNativeStackNavigator();

export default function HelpCentreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(restaurant)" component={index} />
      <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="Processing" component={Processing} />
      <Stack.Screen name="BookingSummary" component={BookingSummary} />
    </Stack.Navigator>
  );
}
