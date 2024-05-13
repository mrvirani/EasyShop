import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={styles.header}>

        <MaterialIcons name='keyboard-backspace' color='black' size={25} style={{ flex:1, marginLeft: 8, lineHeight: 60, }} onPress={()=>props.navigation.goBack()} />

      </View>
  )
}

export default Header

const styles = StyleSheet.create({

    header: {
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
      },

})