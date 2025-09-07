import { View, Text } from 'react-native'
import React from 'react'

const Child = (props) => {
    let counter = props.data;
  return (
    <View>
      <Text>children</Text>
      <Text> {counter}</Text>
    </View>
  )
}

export default Child;