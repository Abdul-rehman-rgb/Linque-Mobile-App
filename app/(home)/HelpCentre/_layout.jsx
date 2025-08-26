import { Stack } from 'expo-router';

export default function HelpCentreLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#7118DE",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    />
  );
}
