import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BusinesCenter from "./HelpCentre/BusinesCenter";
import CancelBooking from "./HelpCentre/CancelBooking";
import EditBooking from "./HelpCentre/EditBooking";
import Eticket from "./HelpCentre/Eticket";
import Faq from "./HelpCentre/Faq";
import HelpCentre from "./HelpCentre/index";
import Invite from "./HelpCentre/Invite";
import LiveChat from "./HelpCentre/LiveChat";
import Refund from "./HelpCentre/Refund";

const Stack = createNativeStackNavigator();

export default function HelpCentreStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HelpCentreMain" component={HelpCentre} />
      <Stack.Screen name="EditBooking" component={EditBooking} />
      <Stack.Screen name="CancelBooking" component={CancelBooking} />
      <Stack.Screen name="Eticket" component={Eticket} />
      <Stack.Screen name="Refund" component={Refund} />
      <Stack.Screen name="Invite" component={Invite} />
      <Stack.Screen name="Faq" component={Faq} />
      <Stack.Screen name="LiveChat" component={LiveChat} />
      <Stack.Screen name="BusinesCenter" component={BusinesCenter} />
    </Stack.Navigator>
  );
}
