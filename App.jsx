import { View, Text, Button } from 'react-native';
import React from 'react';
// import First from './src/components/First.jsx';
// import UseStateHook from './src/components/UseStateHook.jsx';
// import Props from './src/components/Props.jsx';
import TextInputfile from './src/components/TextInputfile.jsx';
import { StyleSheet } from 'react-native';
import stylesm from './src/components/styles/stylesm.js'


const App = () => {
  return (
    <View>
      {/* <Text style={{ fontSize: 30 }}>App   This is my love
      </Text>
      <Button title='Press here'/>
      <First /> */}

      {/* <UseStateHook /> */}
      {/* <Text> My app</Text> */}
      {/* <Props /> */}
      <TextInputfile/>
      <Text style={ { fontSize:30 , color:'white', backgroundColor:'crimson'
      , borderWidth: 2, borderColor: 'Black'}}> Inline Styling</Text>
      <Text style = {style.text}> Internal Styling</Text>
      <Text style = {stylesm.text}> External Styling</Text>
    </View>
  )
}


const style = StyleSheet.create({
  text: {fontSize:30 , padding : 10 , backgroundColor:'green', 
    borderColor:'lightgreen', borderWidth: 10, marginVertical:10, color:'white'}

})

export default App