import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const signUp = () => {
  return (
    <View>
      <Text>Sign Up a new Account</Text>
      <Link href="/(auth)/sign-in">Go to Sign In</Link>
    </View>
  )
}

export default signUp