import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, Dimensions, ToastAndroid, Alert, Image, ActivityIndicator } from 'react-native'
import React, { useRef, useState } from 'react'

import CustomeButton from '../../components/UI/atoms/CustomeButton'

import PhoneInput from "react-native-phone-number-input";

const { width, height } = Dimensions.get('window')


import * as LoginAction from '../../store/Actions/Auth'
import { useDispatch, useSelector } from 'react-redux';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { useNavigation } from '@react-navigation/native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'





const PhoneLogin = (props) => {

    const dispatch = useDispatch()

    const [value, setValue] = useState('')
    const [formatedNumber, setFormatedNumber] = useState('')
    const [valid, setValid] = useState(false)
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef()
    const navigation = useNavigation()

    const [isLoading, setIsLoading] = useState(false)

    const LoginResData = useSelector(state => state.auth.loginData) //login response data

    const msg = useSelector(state => state.auth.msg)


    const CreateAccountHandler = (props) => {

        const checkValid = phoneInput.current?.isValidNumber(value)
        const country_code = "+" + phoneInput.current?.getCallingCode();
        setValid(checkValid ? checkValid : false)
        setShowMessage(true)
   
        // navigation.navigate('OtpLogin')

        // if (value.length === 10) {
        //     navigation.navigate('OtpLogin')
        // } else {
        //     Alert.alert("enter phone number ")

        // }

        console.log(country_code, "<====>", value)

        setIsLoading(true)

        dispatch(LoginAction.login(country_code, value)).then((res) => {


            setIsLoading(false)

            console.log("phone number to login ", res.msg)
            if (res.status === 'success') {
                if (value.length === 10) {
                    navigation.navigate('OtpLogin')
                } else {
                    Alert.alert("enter valid phone number ")
        
                }
                Alert.alert(res.msg)
            } else {
                Alert.alert(res.msg)
            }
        })


        // if (valid === false) {
        //     Alert.alert("Invalid Phone Number", "You have not Enter Phone Number correctly")
        // } else if (valid === true) {
        //     navigation.navigate('OtpLogin')
        // }

        // if())){
        // } 

    }

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }


    return (


        <View style={styles.screen}>

            <View style={styles.header}>

                <MaterialIcons name='keyboard-backspace' color='black' size={25} style={{ flex: 1, lineHeight: 60, }} onPress={() => navigation.goBack()} />

            </View>

            <View style={{ height: height * 0.80 }}>

                <View style={styles.container}>

                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Signin with Phone</Text>
                        <Image source={require('../../images/egg.png')} style={styles.ovelImage} />
                    </View>

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

                {/* {showMessage && (
                    <View style={styles.message}>
                        <Text>Value : {value}</Text>
                        <Text>Valid : {valid ? "true" : "false"}</Text>
                        <Text>Formated Number : {formatedNumber}</Text>
                    </View>
                )} */}

            </View>
            <View>

                <View style={{ alignItems: 'center', bottom:-30 }}>
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

    textContainer: {
        position: 'relative',
        zIndex: 1
    },

    ovelImage: {
        position: 'absolute',
        right: 185,
        top: -2,
        zIndex: 0,
        transform: [{ rotate: '10deg' }]
    },
    header: {
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    header: {
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    container: {
        marginVertical: 15
    },

    title: {
        zIndex:1,
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