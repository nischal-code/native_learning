import { View, Text } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'

const signIn = () => {
  return (
    <View>
      <Text>Log In</Text>
      <Link href="/(auth)/sign-up">Create Account</Link>
    </View>
  )
}

export default signIn