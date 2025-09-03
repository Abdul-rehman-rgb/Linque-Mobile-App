import { UserContextProvider, useUserData } from '@/context/UserContext';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomNav from './components/BottomNav';

export default function RootLayout() {
  //const colorScheme = useColorScheme();

 const [loaded] = useFonts({
   'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
   'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
   'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
   'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
   'GoodTimes': require('../assets/fonts/GoodTimes.otf'),
 });

  if (!loaded) {
    return null;  // Wait for font loading before rendering
  }

  const AppContent = () => {
    const { user } = useUserData();
    return (
      <>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="Explore" />
          <Stack.Screen name="login" />
          <Stack.Screen name="HelpCentre" />
          <Stack.Screen name="EditBooking" />
          <Stack.Screen name="LiveChat" />
        </Stack>
        {user && <BottomNav />}
        <StatusBar style="auto" />
      </>
    );
  };

  return (
    <UserContextProvider>
      <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#fff"}}>
        <SafeAreaProvider>
          {/* <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}> */}
          <AppContent />
          {/* </ThemeProvider> */}
        </SafeAreaProvider>
      </GestureHandlerRootView>
    </UserContextProvider>
  );
}
