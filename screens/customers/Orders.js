import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Orders(props) {
  return (
    <View style={styles.screen}>
    <Text>Orders</Text>
    <Button title='Order btn' onPress={()=>props.navigation.navigate('Explore')} />
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