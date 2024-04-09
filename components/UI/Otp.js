import { Alert, Dimensions, StyleSheet, Text, ToastAndroid, View } from 'react-native'
import React, { useEffect, useState } from 'react'



import { OtpInput } from "react-native-otp-entry";

import Icon from "react-native-vector-icons/Octicons"
import CustomeButton from '../CustomeButton';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useDispatch, useSelector } from 'react-redux';
import * as otpAction from '../../store/Actions/Auth'

const { width, height } = Dimensions.get('window')

const Otp = ({ route, navigation }) => {

    // const { resData } = route.params;
    // const dispatch = useDispatch();


    const [otp, setOtp] = useState('');
    const [wholeOtp, setWholeOtp] = useState('')

    const dispatch = useDispatch();

    const statusOfOtp = useSelector(state => state.auth.signUpData)


    console.log("statusOfOtp===>", statusOfOtp)

    const STATUSOFOTP = useSelector(state=>state.auth.status)

    console.log("STATUSOFOTP====>" , STATUSOFOTP)


    const renderPlaceholderDots = () => {
        const PlacehoderDots = []
        for (let i = 0; i < 4; i++) {
            PlacehoderDots.push(
                <Icon name={otp[i] ? "" : 'dot-fill'} color="#FB5193" size={28} />
            )
        }
        return PlacehoderDots
    }



    const email = statusOfOtp?.data?.email;

    const OtpVerifyHandler = () => {


        let formData = new FormData();
        formData.append('role', 1)
        formData.append('email', statusOfOtp.data.email);
        formData.append('country_code', statusOfOtp.data.country_code);
        formData.append('phoneno', statusOfOtp.data.phoneno);
        formData.append('hashedPassword', statusOfOtp.data.password);
        formData.append('firstname', statusOfOtp.data.firstname);
        formData.append('lastname', statusOfOtp.data.lastname);
        formData.append('imageUrl', statusOfOtp.data.image);
        formData.append('otpid', statusOfOtp.data.otpid);
        formData.append('enteredotp', wholeOtp);
        

        dispatch(otpAction.verifyOtpRegister( formData ))





        // dispatch(otpAction.verifyOtpRegister([
        //     statusOfOtp.data.email, 
        //     "1",
        //     statusOfOtp.data.country_code,
        //     statusOfOtp.data.phoneno,
        //     statusOfOtp.data.hashedPassword,
        //     statusOfOtp.data.lastname,
        //     statusOfOtp.data.firstname,
        //     statusOfOtp.data.image,
        //     statusOfOtp.data.otpid,
        //     wholeOtp,
        //     statusOfOtp.data.msg,
        //     statusOfOtp.data.statusCode,
        //     statusOfOtp.data.status, 
        // ]

        //     ))




        // const responseData = dispatch(verifyOtp.verifyOtpRegister(formdata))
        // .then(success => {
        //     if (success) {
        //         navigation.navigate('Login');
        //         Alert.alert("Hase bhai hase....")
        //     } else {
        //         // Handle error or show toast
        //         Alert.alert("TRY AGAIN BRO!!")
        //     }
        // });

        // if(responseData.success){
        //     Alert.alert("Done bro..")
        // }else{
        //     Alert.alert("filed to verify try again")
        // }
    };


    useEffect(() => {

        if(email){
            STATUSOFOTP ==="success" && OtpVerifyHandler()
            props.navigation.navigate('Login')

            STATUSOFOTP ==="error" && props.navigation.navigate('Login')

        }

    }, [email])



    return (
        <View style={styles.screen}>



            <View style={styles.Txtcontainer}>

                <View style={{ flexDirection: 'row' }}>

                    <Text style={styles.title}>Verification Code</Text>
                    {/* <View style={styles.sign}></View> */}

                </View>
                <Text style={styles.summary}>
                    Please enter code sent to e-mail
                </Text>
            </View>


            <View style={styles.otpContainer}>
                <OtpInput
                    numberOfDigits={4}
                    focusColor="#FB5193"
                    onTextChange={(text) => setOtp(text)}
                    focusStickBlinkingDuration={500}
                    // onTextChange={(text) => console.log(text)}
                    onFilled={(text) => setWholeOtp(text)}

                    theme={{
                        containerStyle: styles.container,
                        inputsContainerStyle: styles.inputsContainer,
                        pinCodeContainerStyle: styles.pinCodeContainer,
                        pinCodeTextStyle: styles.pinCodeText,
                        focusStickStyle: styles.focusStick,
                        // focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                    }}

                />

                <View style={styles.placeholderContainer}>{renderPlaceholderDots()}</View>


            </View>


            {/* <View style={styles.container}>
                       <OTPInputView 
                            pinCount={4}
                            placeholderCharacter='1234'
                            style={{width: '80%', height: 200}}
                        />
                       </View> */}

            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>

                <Text style={{ fontSize: 14 }}>Having Problem?</Text>
                <Text style={{ color: "black", fontSize: 14, }}> Resend Code</Text>
            </View>

            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <CustomeButton style={{ padding: 15 }} onPress={OtpVerifyHandler}>Verify Now</CustomeButton>
            </View>


        </View>
    )

}






export default Otp

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        marginHorizontal: 16

    },

    sign: {
        width: 50,
        height: 30,
        borderColor: 'green',
        borderWidth: 2,
        backgroundColor: '#FC2779'
    },

    Txtcontainer: {
        marginVertical: 20,
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


    otpContainer: {
        // flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },

    container: {
        borderRadius: 100,
        // borderColor: 'black',
        // borderWidth: 1,
        padding: 10,
        width: '80%'
    },

    inputsContainer: {
        // borderColor: 'red',
        // borderWidth: 1,
    },


    pinCodeContainer: {
        // borderColor: 'green',
        // borderWidth: 1,
        borderRadius: 8,
        width: 60
    },

    // pinCodeText: {
    //     color: ''
    // },

    placeholder: {
        fontSize: 20,
        color: 'black',
    },

    placeholderContainer: {
        width: "61%",
        // borderColor: 'red',
        // borderWidth: 1,
        zIndex: 1,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center'
    },

    placeholderDot: {
        fontSize: 19,
        borderColor: 'red',
        borderWidth: 1,
        color: 'gray',
        paddingVertical: 50,
        marginHorizontal: 5,
        zIndex: 0,
        alignItems: 'center'
    },




})