import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'

const UseStateHook = () => {
    const [name , setName] = useState('Mahima');
  return (
    <View>
      <Text>UseStateHook</Text>
      <Text>Name: {name}</Text>
      <Button title = "Press" onPress = {() => setName('Ashish')}/>
    </View>
  )
}

export default UseStateHook