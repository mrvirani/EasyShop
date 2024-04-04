import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomeButton from '../CustomeButton'

const Rewards = () => {
  return (
    <View>
        <Image source={require('../../images/Giftcard-bro.png')} />
      <Text>You are Rewarded 50 points of this poll</Text>
      <View style={{width:200, borderColor:'black', borderWidth:1, marginVertical:10}}></View>
        <CustomeButton>Okay!</CustomeButton>
    </View>
  )
}

export default Rewards

const styles = StyleSheet.create({})