import "react-native-reanimated";
import "react-native-gesture-handler";
import { useEffect } from "react";
import { Slot } from "expo-router";
import { ThemeProvider } from "../context";

import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

SplashScreen.preventAutoHideAsync();

export default function HomeLayout() {
  const inner = <Slot />;

  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <ThemeProvider>
      <SafeAreaProvider>{inner}</SafeAreaProvider>
    </ThemeProvider>
  );
}
