import { View, Text,StatusBar } from 'react-native'
import React from 'react'
//Stylesheet
import Commonstyle from './Styles/Commonstyle'


const AboutScreen = () => {
  return (
    <View  style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
         <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Text style={Commonstyle.commonTxt}>AboutScreen</Text>
    </View>
  )
}

export default AboutScreen