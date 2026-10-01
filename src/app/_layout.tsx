import { Stack } from "expo-router";
import { Link } from "expo-router";
import { cssInterop } from "nativewind";

// 1. Import your global CSS file for NativeWind v4
import "@/global.css"; 

// 2. Teach NativeWind how to apply classes to the Link component
cssInterop(Link, { className: "style" });

export default function RootLayout() {
  return <Stack screenOptions={{headerShown: false}}/>
}