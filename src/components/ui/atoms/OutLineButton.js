import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '@rneui/themed'

const OutLineButton = (props) => {
    return (
        <Pressable style={styles.contaniner} onPress={props.onPress}>

            <View style={[styles.buttonConainer, props.style]}>
                <Text style={[styles.btnText, props.style]}>{props.children}</Text>
            </View>
        </Pressable>
    )
}

export default OutLineButton

const styles = StyleSheet.create({

    contaniner: {
        // width: Dimensions.get('window').width * 0.18,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonConainer: {
        width: 80,
        alignItems: 'center',
        height: 40,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginRight:10
    },

    btnText: {
        color: 'black'
    }
})