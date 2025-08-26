import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeStack from "./HomeStack";

const Stack = createNativeStackNavigator();

const index = () => {
  return (
   <>
    <HomeStack />
   </>

  );
}
export default index;