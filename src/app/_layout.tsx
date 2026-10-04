import { SplashScreen, Stack } from "expo-router";
import { Link } from "expo-router";
import { cssInterop } from "nativewind";
import {useFonts} from "expo-font"

// 1. Import your global CSS file for NativeWind v4
import "@/global.css"; 
import { useEffect } from "react";
SplashScreen.preventAutoHideAsync();
// 2. Teach NativeWind how to apply classes to the Link component
cssInterop(Link, { className: "style" });

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "sans-regular": require("../../assets/fonts/PlusJakartaSans-Regular.ttf"),
    "sans-bold": require("../../assets/fonts/PlusJakartaSans-Bold.ttf"),
    "sans-medium": require("../../assets/fonts/PlusJakartaSans-Medium.ttf"),
    "sans-semiBold": require("../../assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "sans-extrabold": require("../../assets/fonts/PlusJakartaSans-ExtraBold.ttf"),
    "sans-light": require("../../assets/fonts/PlusJakartaSans-Light.ttf"),
  })

  useEffect(()=>{
    if(fontsLoaded){
      SplashScreen.hideAsync()
    }
  },[fontsLoaded])
  if(!fontsLoaded) return null;
  
  return <Stack screenOptions={{headerShown: false}}/>
}