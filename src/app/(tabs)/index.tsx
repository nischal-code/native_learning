import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-2xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href="/OnBoarding" className='mt-4 rounded bg-primary text-white p-4'>Go Onboarding</Link>
      <Link href="/(auth)/sign-in" className='mt-4 rounded bg-primary text-white p-4'>go to Log In</Link>
      <Link href="/(auth)/sign-up" className='mt-4 rounded bg-primary text-white p-4'>Go to Sign Up</Link>
      <Link href="/subscriptions/spotify">Spotify Subcription</Link>
      <Link href={{
        pathname:"/subscriptions/[id]",
        params:{id:"claude"}
        
      }} >Claude Max Subscriptions</Link>
    </SafeAreaView>
  );
}