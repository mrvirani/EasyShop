import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default function Orders(props) {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>

        <MaterialIcons name='keyboard-backspace' color='black' size={25} style={{ marginLeft: 20, lineHeight: 60, }} />

        <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, color: 'black' }}>Orders</Text>


        <Ionicons name='bag-handle-outline' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }} />


      </View>


      <View>

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
  }
})