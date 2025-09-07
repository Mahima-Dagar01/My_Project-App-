import { View, Text, TextInput , Button} from 'react-native'
import React, { useState } from 'react'

const TextInputfile = () => {
  const [name, setName] = useState('');
  return (
    <View>
      <Text>TextInput</Text>
      <Text>Name : {name}</Text>
      <TextInput style = { {fontSize : 10, borderColor: 'Black', borderWidth: 1.5}
      } placeholder='Enter Your Username' value={name}
       onChangeText={(value) =>setName(value)} ></TextInput>
       <Button title='Clear' onPress={()=> setName('')}/>
        <Text>My app :-)</Text>
    </View>
  )
}

export default TextInputfile