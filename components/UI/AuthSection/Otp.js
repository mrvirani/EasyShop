import { ActivityIndicator, Alert, Dimensions, Image, Pressable, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'



import { OtpInput } from "react-native-otp-entry";

import Icon from "react-native-vector-icons/Octicons"
import CustomeButton from '../atoms/CustomeButton';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useDispatch, useSelector } from 'react-redux';
import * as otpAction from '../../../store/Actions/Auth'
import { TouchableNativeFeedback } from 'react-native';

import { useNavigation } from '@react-navigation/native'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const { width, height } = Dimensions.get('window')

const Otp = ({ route }) => {

    // const { resData } = route.params;
    // const dispatch = useDispatch();


    const [otp, setOtp] = useState('');
    const [wholeOtp, setWholeOtp] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const SelectStatus = useSelector(state => state.statusRegister) // sign up data status: success or error

    console.log("SelectStatus===>", SelectStatus)

    const [performAction, setPerformAction] = useState();



    const navigation = useNavigation()


    // const [performAction, setPerformAction] = useState(SelectStatus === "success" ? setPerformAction("login") : setPerformAction("register"))

    // console.log(initialPerformAction)

    const dispatch = useDispatch();

    const statusRegister = useSelector(state => state.auth.statusRegister) //Registration status response data
    const msg = useSelector(state => state.auth.msg) //Registration msg response data
    const statusCode = useSelector(state => state.auth.statusCode) //Registration status code response data
    console.log("RegisterResData=====>", statusRegister, msg, statusCode)

    const Resendmsg = useSelector(state => state.auth.Resendmsg) //RESEND status response data
    const ResendstatusCode = useSelector(state => state.auth.ResendstatusCode) //Resend msg response data
    const Resendotpid = useSelector(state => state.auth.Resendotpid) //RESEND status code response data
    console.log("ResendResData=====>", Resendmsg, ResendstatusCode, Resendotpid)

    const statusOfOtp = useSelector(state => state.auth.signUpData)    //response data of signup // user register karse tyarno
    console.log("statusOfOtp===>", statusOfOtp)

    const STATUSOFOTP = useSelector(state => state.auth.status)
    console.log("STATUSOFOTP====>", STATUSOFOTP)

    // const LoginResData = useSelector(state => state.auth.data) //login response data

    // console.log("LoginResData=====>", LoginResData)

    const STATUSOFOTPLOGIN = useSelector(state => state.auth.status)

    const OTPID = useSelector(state => state.auth.otpid)  // signup user otpid
    console.log("OTPID===>", OTPID)


    // useEffect(() => {
    //     // Determine the initial value for performAction based on SelectStatus
    //     const initialPerformAction = SelectStatus === "success" ? "login" : "register";
    //     setPerformAction(initialPerformAction);
    // }, [SelectStatus]);



    const renderPlaceholderDots = () => {
        const PlacehoderDots = []
        for (let i = 0; i < 4; i++) {
            PlacehoderDots.push(
                <Icon name={otp[i] ? "" : 'dot-fill'} color="#FB5193" size={28} />
            )
        }
        return PlacehoderDots
    }

    const OtpVerifyHandler = async (props) => {

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

        try {

            setIsLoading(true)

            dispatch(otpAction.verifyOtpRegister(formData)).then((res) => {

                setIsLoading(false)

                console.log("hghdh", res)
                if (res.status === 'success') {
                    navigation.navigate('Login')
                    Alert.alert(res.msg)
                } else {
                    Alert.alert(res.msg)
                }
            })

            if (wholeOtp === null) {
                ToastAndroid.showWithGravity('OTP is not properly field.', 'Please try again!!!')
            }

            // navigation.navigate('Login')

        } catch (error) {
            setIsLoading(false);

            if (error.message === "User registerd successfully✅") {
                Alert.alert("Registration Successful", "You have successfully registered!");
            } else {
                // General error alert
                Alert.alert("Registration Failed", error.message);
            }
        }




    };

    const ResendotpHandler = () => {
        console.log("hello")

        dispatch(otpAction.resendOtp(statusOfOtp.data.otpid)).then((res) => {

            console.log("hghdh", res)
            if (res.status === 'success') {
                
                Alert.alert(res.msg)
            } else {
                Alert.alert(res.msg)
            }
        })

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



            <View style={{ flexDirection: 'row', paddingTop: 10}}>

                <View style={styles.textContainer}>
                    <Text style={styles.title}>Verification Code</Text>
                    <Image source={require('../../../images/egg.png')} style={styles.ovelImage} />
                </View>

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

                {/* <View style={styles.placeholderContainer}>{renderPlaceholderDots()}</View> */}


            </View>

            <View style={{ flex: 1 }}>

                <View style={styles.resendOtpContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14 }}>Having Problem?</Text>
                        {/* <Text style={{ color: "black", fontSize: 14, }}> Resend Code</Text> */}
                        {/* <TouchableOpacity style={{}}> */}
                        <Text onPress={ResendotpHandler}
                        //  disabled={ countdown > 0 && countdown< 30} 
                        //   style={{  height:30,color: countdown > 0 || countdown < 30 ? "#635e5e" : "black",
                        //    fontSize: 14, }}
                        >Resend OTP</Text>
                        {/* </TouchableOpacity> */}

                    </View>

                    {/* {(countdown > 0 && countdown<30)?  <Text style={{ marginTop: 10 }}>Resend OTP in: {countdown} seconds</Text>: ''} */}
                </View>


            </View>


            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <CustomeButton style={{
                    padding: 15,
                    // backgroundColor: (statusOfOtp === null) ? "black" : "red"
                }}
                    //  disabled={statusOfOtp === null} 
                    onPress={OtpVerifyHandler}>Verify Now</CustomeButton>
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

    textContainer: {
        position: 'relative'

    },

    ovelImage: {
        position: 'absolute',
        right: "-3%",
        top: 0,
        zIndex: 0,
        transform: [{ rotate: '10deg' }]
    },


    header: {
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
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
        zIndex: 1,
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

    resendOtpContainer:{
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 10 
    }



})