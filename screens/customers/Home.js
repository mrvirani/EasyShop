import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default function Home(props) {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <View style={{ flex: 1, marginLeft: 20, lineHeight: 60, alignSelf: 'center', top: 10 }}>
          <Text style={{ color: '#A8A8A8', lineHeight: 25, }}>Location</Text>
          <View style={{ flexDirection: 'row', flex: 1, }}>
            <Text>New York,USA</Text>
            <SimpleLineIcons name='arrow-down' color='black' size={12} style={{ lineHeight: 20, left: 10 }} />
          </View>
        </View>

        <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, color: 'black' }}>Easy Shop</Text>

        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', }}>

          <FontAwesome name='heart-o' color='black' size={22} style={{ marginRight: 22, lineHeight: 60, }} onPress={()=>{}}  />

          <MaterialIcons name='logout' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }}  onPress={()=>{}}  />
        </View>

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