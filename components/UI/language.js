import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { COLORS } from '../../screens/Onboard.js/OnboardingScreen'
import CustomeButton from '../CustomeButton'
import { useRoute } from '@react-navigation/native'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const LAUNGUAGE = new Array(16).fill('English')
const { width, height } = Dimensions.get('window')


const Language = (props) => {
  const [selectedbox, setSelectedBox] = useState(0)

  const route = useRoute();
  const passdata = route.params?.passdata

  console.log(passdata)

  const backgroundColorSelected = passdata === '1' ? '#FB5193' : '#6A65F4'; // Pink for '1', Blue for '2'
  const backgroundColorUnselected = '#E8E8E8';


  return (
    <View style={styles.screen}>

      {/* <View style={styles.header}>

        <MaterialIcons name='keyboard-backspace' color='black' size={25} style={{ marginLeft: 20, lineHeight: 60, }} onPress={()=>props.navigation.goBack()} />

        <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center',left:-20, fontSize: 20, color: 'black' }}>Language</Text>


        <Ionicons name='bag-handle-outline' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }} />


      </View> */}

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



              <CustomeButton style={{ width: width * 0.43, height: 50, padding: 15, marginHorizontal: 5, backgroundColor: selectedbox === index ? backgroundColorSelected : backgroundColorUnselected }} onPress={() => setSelectedBox(index)}>
                <Text style={{ color: selectedbox === index ? 'white' : 'black' }} > {item}</Text>
              </CustomeButton>

              {/* <View style={{ width:width*0.4, margin:10 ,padding: 10 ,justifyContent:'center',alignItems:'center',  borderRadius:10,   backgroundColor:'COLORS.promary'}}>
              <Text>{item}</Text>
            </View> */}


            </View>

          )

          } />

      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

        <CustomeButton onPress={() => props.navigation.navigate('onBoard')} style={{ margin: 20, height: 50, marginVertical: 10, backgroundColor: passdata === '1' ? '#FB5193' : '#6A65F4' }} >Continue</CustomeButton>
      </View>
    </View>
  )
}

export default Language

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 12,
    height: height * 0.8
  },

  header: {
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  griditem: {
    width: 150, margin: 10, padding: 10, backgroundColor: '#F5F5F5'
  }
})