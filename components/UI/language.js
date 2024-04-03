import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { COLORS } from '../../screens/Onboard.js/OnboardingScreen'
import CustomeButton from '../CustomeButton'

const LAUNGUAGE = new Array(16).fill('English')
const { width, height } = Dimensions.get('window')


const language = (props) => {
  const [selectedbox, setSelectedBox] = useState(0)
  return (
    <View style={styles.screen}>

      <View style={{ height: height * 0.80, marginVertical: 10 }}>


        <View style={{ width: width * 0.6, marginHorizontal: 10 }}>
          <Text style={{ fontSize: 26, color: 'black', marginVertical: 5 }}>Choose Language</Text>

          <Text style={{ fontSize: 16 }} numberOfLines={2}>Choose your favorite language to easy to explore app</Text>
        </View>

        <FlatList
          data={LAUNGUAGE}
          numColumns={2}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) =>
          (
            <View style={{ flex: 1, alignItems: 'center', }}>

              <CustomeButton style={{ width: width * 0.43, height: 50, padding: 15, marginHorizontal: 5, backgroundColor: selectedbox === index ? '#FB5193' : '#E8E8E8', }} onPress={() => setSelectedBox(index)}>
                <Text style={{ color: selectedbox === index ? 'white' : 'black' }} > {item}</Text>
              </CustomeButton>

              {/* <View style={{ width:width*0.4, margin:10 ,padding: 10 ,justifyContent:'center',alignItems:'center',  borderRadius:10,   backgroundColor:'COLORS.promary'}}>
              <Text>{item}</Text>
            </View> */}


            </View>

          )

          } />

      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',  }}>

        <CustomeButton style={{ margin: 20, height: 50, marginVertical: 10 }}>Continue</CustomeButton>
      </View>
    </View>
  )
}

export default language

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 12,
    height: height * 0.8
  },

  griditem: {
    width: 150, margin: 10, padding: 10, backgroundColor: '#F5F5F5'
  }
})