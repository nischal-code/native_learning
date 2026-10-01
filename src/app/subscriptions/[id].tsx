import { View, Text } from 'react-native'
import { Link, useLocalSearchParams } from 'expo-router'

const SubcriptionDetails = () => {
    const {id} = useLocalSearchParams<{id : string}>();
  return (
    <View className='mt-12'>
      <Text>Subcription Details : {id}</Text>
      <Link href="/">Go Back</Link>
    </View>
  )
}

export default SubcriptionDetails