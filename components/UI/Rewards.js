import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Rewards = () => {
  return (
    <View>
        <Image source={require('../../images/Giftcard-bro.png')} />
      <Text>You are Rewarded 50 points of this poll</Text>
    </View>
  )
}

export default Rewards

const styles = StyleSheet.create({})