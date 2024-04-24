import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import CustomeButton from '../atoms/CustomeButton'

const { width, height } = Dimensions.get('window')

const ForgetPassword = () => {
    return (
        <View style={styles.screen}>

            <View style={{ height: height * 0.75 }}>

                <View style={styles.container}>

                    <Text style={styles.title}>Forget Password</Text>
                    <Text style={styles.summary}>
                        We will send Password recovery code in this e-mail
                    </Text>
                </View>

                <View style={styles.inputContainer}>

                    <Text style={styles.titletxt}>E-mail</Text>
                    <TextInput
                        value=''
                        onChangeText={() => { }}
                        placeholder='Enter Email-address'
                        style={styles.input}
                    />
                </View>
            </View>


            <View style={styles.BtnContainer}>
                <CustomeButton style={styles.Submitbtn} > Send </CustomeButton>
            </View>


        </View>
    )
}

export default ForgetPassword

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

    titletxt: {
        paddingLeft: 3,
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },


    input: {
        borderWidth: 2,
        borderColor: '#eae3e3',
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 10,
        marginBottom: 10,
        paddingStart: 20,
        marginTop: 10
    },

    inputContainer: {
        marginHorizontal: 10
    },

    BtnContainer: {
        alignItems: 'center'
    },

    Submitbtn: {
        height: 50,
        marginTop: 70
    }

})