import { Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import { COLORS } from './OnboardingScreen'
import CustomeButton from '../atoms/CustomeButton'
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

      <View style={styles.header}>

        <MaterialIcons name='keyboard-backspace' color='black' size={25} style={{ flex: 1, marginLeft: 8, lineHeight: 60, }} onPress={() => props.navigation.goBack()} />

      </View>

      <View style={styles.mainContainer}>


        <View style={styles.titleContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Choose Language</Text>
            {
              passdata === "1" ?
                (<Image source={require('../../../images/egg.png')} style={styles.ovelImage} />) :
                (<Image source={require('../../../images/eggBlue.png')} style={styles.ovelImage} />)
            }
          </View>
          <Text style={{ fontSize: 16 }} numberOfLines={2}>Choose your favorite language to easy to explore app</Text>
        </View>

        <FlatList
          data={LAUNGUAGE}
          numColumns={2}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) =>
          (
            <View style={{ flex: 1, alignItems: 'center' }}>

              <CustomeButton style={{ width: width * 0.43, height: 50, padding: 15, marginHorizontal: 5, backgroundColor: selectedbox === index ? backgroundColorSelected : backgroundColorUnselected }} onPress={() => setSelectedBox(index)}>
                <Text style={{ color: selectedbox === index ? 'white' : 'black' }} > {item}</Text>
              </CustomeButton>

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

  textContainer: {
    position: 'relative'

  },

  ovelImage: {
    position: 'absolute',
    right: "23%",
    top: 3,
    zIndex: 0,
    transform: [{ rotate: '10deg' }]
  },
  header: {
    height: 40,
    justifyContent: 'center',
    flexDirection: 'row',
  },

  griditem: {
    width: 150,
    margin: 10,
    padding: 10,
    backgroundColor: '#F5F5F5'
  },
  mainContainer: {
    height: height * 0.80,
    marginVertical: 10
  },
  titleContainer: {
    width: width * 0.6,
    marginHorizontal: 10
  },
  title: {
    zIndex: 1, fontSize: 26, color: 'black', marginVertical: 5
  },
  // languageBtn: {
  //   width: width * 0.43,
  //   height: 50,
  //   padding: 15,
  //   marginHorizontal: 5,
  //   backgroundColor: selectedbox === index ? backgroundColorSelected : backgroundColorUnselected
  // },
  // continueBtn: {
  //   margin: 20,
  //   height: 50,
  //   marginVertical: 10,
  //   backgroundColor: passdata === '1' ? '#FB5193' : '#6A65F4'
  // }
})