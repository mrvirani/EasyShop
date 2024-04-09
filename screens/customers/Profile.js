import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import MaterialIcons from 'react-native-vector-icons/MaterialIcons'



const { width, height } = Dimensions.get('window')


export default function Profile() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <MaterialIcons name='keyboard-backspace' color='black' size={22} style={{ marginLeft: 20, lineHeight: 60, }} onPress={()=>{}}  />

        <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, color: 'black' }}>Profile</Text>

        <MaterialIcons name='logout' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }}  onPress={()=>{}} />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  header: {
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
  }
})