import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, Dimensions, ToastAndroid, Alert } from 'react-native'
import React, { useRef, useState } from 'react'

import CustomeButton from '../../components/CustomeButton'

import PhoneInput from "react-native-phone-number-input";

const { width, height } = Dimensions.get('window')


import * as LoginAction from '../../store/Actions/Auth'
import { useDispatch, useSelector } from 'react-redux';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native'





const PhoneLogin = (props) => {

    const dispatch = useDispatch()

    const [value, setValue] = useState('')
    const [formatedNumber, setFormatedNumber] = useState('')
    const [valid, setValid] = useState(false)
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef()
    const navigation = useNavigation()

    const LoginResData = useSelector(state => state.auth.loginData) //login response data

    const msg = useSelector(state => state.auth.msg)


    const CreateAccountHandler = (props) => {

        const checkValid = phoneInput.current?.isValidNumber(value)
        const country_code = "+" + phoneInput.current?.getCallingCode();
        setValid(checkValid ? checkValid : false)
        setShowMessage(true)
        console.log("msg", msg)

        navigation.navigate('OtpLogin')

        // if (valid === true) {
        //     props.navigation.navigate('Otp')
        // } else {
        //     Alert.alert("enter phone number ")
        // }

        console.log(country_code, "<====>", value)
        dispatch(LoginAction.login(country_code, value))


        // if (valid === false) {
        //     Alert.alert("Invalid Phone Number", "You have not Enter Phone Number correctly")
        // } else if (valid === true) {
        //     navigation.navigate('OtpLogin')
        // }

        // if())){
        // } 

    }

    return (


        <View style={styles.screen}>

            <View style={{ height: height * 0.80 }}>

                <View style={styles.container}>

                    <Text style={styles.title}>Signin with Phone</Text>
                    <Text style={styles.summary}>Welcome back,You have been missed</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={{ color: 'black', fontWeight: 'bold', paddingLeft: 5, marginVertical: 10, }}>Phone Number</Text>

                    <View style={{ borderRadius: 60, backgroundColor: 'white', borderWidth: 0, borderColor: '#eae3e3', borderWidth: 1, overflow: 'hidden', }}>

                        <PhoneInput
                            ref={phoneInput}
                            defaultCode='IN'
                            defaultValue={value}
                            // layout="first"
                            onChangeText={(text) => setValue(text)}
                            onChangeFormattedText={(text) => setFormatedNumber(text)}
                            // withDarkTheme
                            // containerStyle={{height:70,}}
                            // textContainerStyle={{justifyContent:'center', alignItems:'center', paddingTop:10}}
                            withShadow
                            autoFocus

                        />


                    </View>

                    {console.log(showMessage)}




                </View>

                {showMessage && (
                    <View style={styles.message}>
                        <Text>Value : {value}</Text>
                        <Text>Valid : {valid ? "true" : "false"}</Text>
                        <Text>Formated Number : {formatedNumber}</Text>
                    </View>
                )}

            </View>
            <View >

                <View style={{ alignItems: 'center' }}>
                    <CustomeButton onPress={CreateAccountHandler}
                        style={{ height: 50 }}
                    ><Text >Send OTP</Text></CustomeButton>
                </View>
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

    message: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },

    inputContainer: {
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        marginVertical: 40,

    }

})