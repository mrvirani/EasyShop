import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'

import CustomeButton from '../../components/CustomeButton'

import PhoneInput from "react-native-phone-number-input";




const PhoneLogin = (props) => {

    const [value, setValue] = useState('')
    const [valid, setValid] = useState(false)
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef()

    return (

        // <View><Text> hello</Text></View>




        <View style={styles.screen}>

            <View style={styles.container}>

                <Text style={styles.title}>Signin with Phone</Text>
                <Text style={styles.summary}>Welcome back,You have been missed</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={{ color: 'black', fontWeight: 'bold' }}>Phone Number</Text>

                <PhoneInput
                    ref={phoneInput}
                    defaultCode='IN'
                    defaultValue={value}
                    layout="first"
                    onChangeText={(text)=>setValue(text)}
                    // onChangeFormattedText={(text) => setValue(text)}
                    withDarkTheme
                    withShadow
                    autoFocus
                />

                {showMessage && (
                    <View style={styles.message}>
                        <Text>Value : {value}</Text>
                        <Text>Valid : {valid ? "true" : "false"}</Text>
                    </View>
                )}

                <TouchableOpacity onPress={() => {
                    const checkValid = phoneInput.current?.isValidNumber(value)
                    setValid(checkValid ? checkValid : false)
                    setShowMessage(true)
                }} />


                <CustomeButton >
                    send Otp
                </CustomeButton>
            </View>
        </View>


    )
}

export default PhoneLogin

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

    inputContainer: {
        alignContent: 'center',
        justifyContent: 'center'
    }

})