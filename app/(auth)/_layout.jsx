// app/(auth)/_layout.jsx or _layout.tsx
import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
