import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function CustomeButton(props) {
  return (

    <Pressable onPress={props.onPress} disabled={props.disabled}>
      <View style={[styles.Button, props.style]}>
        <Text style={styles.ButtonText}>{props.children}</Text>
      </View>
    </Pressable>
    //   <Button title={props.title} color={props.color} onPress={props.onPress} />

  )
}

const styles = StyleSheet.create({

  Button: {
    width: 300,
    margin: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FB5193',
    borderRadius: 30,
    padding: 10

  },

  ButtonText: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white'

  }

})