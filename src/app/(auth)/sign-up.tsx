import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const signUp = () => {
  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <Text>Sign Up a new Account</Text>
      <Link href="/(auth)/sign-in">Go to Sign In</Link>
    </SafeAreaView>
  )
}

export default signUp