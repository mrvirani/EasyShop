import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function Home(props) {
  return (
    <View style={styles.screen}>
      <Text>Home</Text>
      <Button title='Home btn' onPress={()=>props.navigation.navigate('Orders')} />
    </View>
  )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
})