import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Explore() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>

        <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center',left:20, fontSize: 20, color: 'black' }}>Explore</Text>

        <Ionicons name='bag-handle-outline' color='black' size={22} style={{ marginRight: 20,  lineHeight: 60, }} onPress={()=>{}}  />


      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header:{
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  }
})