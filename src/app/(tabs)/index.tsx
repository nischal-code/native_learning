import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-extrabold text-primary">
        Home
      </Text>
      <Link href="/OnBoarding" className='font-sans-bold mt-4 rounded bg-primary text-white p-4'>Go Onboarding</Link>
      <Link href="/(auth)/sign-in" className='font-sans-bold mt-4 rounded bg-primary text-white p-4'>go to Log In</Link>
      <Link href="/(auth)/sign-up" className='font-sans-bold mt-4 rounded bg-primary text-white p-4'>Go to Sign Up</Link>
    </SafeAreaView>
  );
}