import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomeButton from '../CustomeButton'

import Modal from "react-native-modal";

const { width, height } = Dimensions.get('window')

const Rewards = () => {

  const [visible, setVisible] = useState(false)

  const setHandler = () => {
    setVisible(!visible)
  }

  return (

    <View style={{ flex: 1 }}>

      <CustomeButton style={{ alignItems:'center' }} onPress={setHandler}
      >click here</CustomeButton>

      <Modal
        isVisible={visible}
        deviceWidth={width}
        deviceHeight={height}
        backgroundColor='white'>

        <View style={styles.container}>
          <Image source={require('../../images/Giftcard-bro.png')} style={{ width: width * 0.65, height: height * 0.35 }} />
          <Text numberOfLines={2} style={{ color: 'black', fontSize: 16, alignItems: 'center' }}>You are Rewarded 50 points of this poll</Text>
          <View style={{ width: 200, borderColor: 'black', borderWidth: 0.5, marginVertical: 10 }}></View>
          <Text style={styles.btn} onPress={setHandler}>Okay!</Text>
        </View>

        {/* <CustomeButton onPress={setHandler}>Close</CustomeButton> */}
      </Modal>
    </View>

    // <View style={styles.screen}>
    //   <View style={styles.container}>

    //     <Image source={require('../../images/Giftcard-bro.png')} style={{width:width*0.65, height:height*0.35}} />
    //   <Text numberOfLines={2} style={{color:'black', fontSize:16, alignItems:'center'}}>You are Rewarded 50 points of this poll</Text>
    //   <View style={{width:250, borderColor:'black', borderWidth:0.5, marginVertical:10}}></View>
    //     <Text style={styles.btn}>Okay!</Text>
    //   </View>
    // </View>
  )
}

export default Rewards

const styles = StyleSheet.create({

  // screen:{
  //   flex:1,
  //   marginHorizontal: 30,
  //   justifyContent:'center',
  //   elevation:5,
  // },
  container: {
    // borderColor:'black',
    // borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  btn: {
    color: '#FB5193',
    fontSize: 18,
    paddingBottom: 10
  }

})