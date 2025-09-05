import { View, Text, Button} from 'react-native';
import React from 'react';
import First from 'src/components/First.jsx';
import UseStateHook from 'src/components/UseStateHook.jsx';

const App = () => {
  return (
    <View>
      {/* <Text style={{ fontSize: 30 }}>App   This is my love
      </Text>
      <Button title='Press here'/>
      <First /> */}

      <UseStateHook />
    </View>
  )
}

export default App