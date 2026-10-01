import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const signIn = () => {
  return (
    <SafeAreaView className='flex-1 bg-background p-5'>
      <Text>Log In</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
    </SafeAreaView>
  )
}

export default signIn