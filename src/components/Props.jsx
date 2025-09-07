import { View, Text , Button} from 'react-native'
import React, { useState } from 'react'
import Child from './Child';
const Props = () => {
    const [count , setCount] = useState(0);
    
  return (
    <View>
      <Text>props</Text>
      <Button title='Counter' onPress = {()=>setCount(count+1)}/>
      <Child data = {count}/>
    </View>
  )
}

export default Props