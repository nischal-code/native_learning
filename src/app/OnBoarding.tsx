import React, { Component } from 'react'
import { Link } from 'expo-router'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default class OnBoarding extends Component {
  render() {
    return (
      <SafeAreaView className='flex-1 bg-background p-5'>
        <Text>Welcome On Board</Text>
      </SafeAreaView>
    )
  }
}
