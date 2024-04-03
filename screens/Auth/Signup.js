import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const Signup = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>

                <Text style={styles.title}>Welcome to EasyShop</Text>
                <Text style={styles.summary}>And Enjoy life during time you.</Text>
            </View>

            <TextInput />
        </View>
    )
}

export default Signup

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        marginHorizontal: 16
    },

    container: {
        marginVertical: 20
    },

    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 26
    },

    summary: {
        fontSize: 16,
        marginVertical: 5
    },

})