import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
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
    </View>
  );
}