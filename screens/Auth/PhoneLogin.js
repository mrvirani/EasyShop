import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { useRef, useState } from 'react'

import CustomeButton from '../../components/CustomeButton'

import PhoneInput from "react-native-phone-number-input";

const { width, height } = Dimensions.get('window')



const PhoneLogin = (props) => {

    const [value, setValue] = useState('')
    const [formatedNumber, setFormatedNumber] = useState('')
    const [valid, setValid] = useState(false)
    const [showMessage, setShowMessage] = useState(false);
    const phoneInput = useRef()

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
                    <CustomeButton onPress={() => {
                        const checkValid = phoneInput.current?.isValidNumber(value)
                        setValid(checkValid ? checkValid : false)
                        setShowMessage(true)
                        if (valid === true) {
                            props.navigation.navigate('Home')
                        }
                    }}
                        style={{ height: 50 }}
                    ><Text >Send OTP</Text></CustomeButton>
                </View>
            </View>


            {/* <CustomeButton >
                    send Otp
                </CustomeButton> */}

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