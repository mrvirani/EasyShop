import { ActivityIndicator, Alert, Dimensions, Image, Pressable, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'



import { OtpInput } from "react-native-otp-entry";

import Icon from "react-native-vector-icons/Octicons"
import CustomeButton from '../atoms/CustomeButton';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useDispatch, useSelector } from 'react-redux';
import * as otpAction from '../../../store/Actions/Auth'
import { TouchableNativeFeedback } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get('window')

const OtpLogin = ({ route, navigation }) => {


    const [otp, setOtp] = useState('');
    const [wholeOtp, setWholeOtp] = useState('')
    const [isLoading, setIsLoading] = useState(false)



    // const [performAction, setPerformAction] = useState();


    const dispatch = useDispatch();



    const LoginResData = useSelector(state => state.auth.loginData) //login response data

    console.log("LoginResDatassss=====>", LoginResData)

    const STATUSOFOTPLOGIN = useSelector(state => state.auth.statusLogin)

    // const OTPID = useSelector(state => state.auth.otpid)  
    // console.log("OTPID Login===>", OTPID)


    // const renderPlaceholderDots = () => {
    //     const PlacehoderDots = []
    //     for (let i = 0; i < 4; i++) {
    //         PlacehoderDots.push(
    //             <Icon name={otp[i] ? "" : 'dot-fill'} color="#FB5193" size={28} />
    //         )
    //     }
    //     return PlacehoderDots
    // }

    // const renderPlaceholderDots = () => {
    //     const placeholders = [];
    //     for (let i = 0; i < 4; i++) {
    //         if (otp.length > i) {
    //             placeholders.push(<Text key={i} style={styles.pinCodeText}>{otp[i]}</Text>);
    //         } else {
    //             placeholders.push(<MaterialIcons key={i} name="fiber-manual-record" size={24} color="gray" />);
    //         }
    //     }
    //     return placeholders;
    // }

    const handleToken = async (res) => {
        try {
            console.log("pppppp",res)
            console.log("accessToken===>", res.data.JWTToken.accessToken)
            await AsyncStorage.setItem('userToken', res.data.JWTToken.accessToken);

            const bearerToken = await AsyncStorage.getItem('userToken');

            console.log("storage data", bearerToken)
        }
        catch (error) {
            console.log(error)
        }
    }




    const OtpVerifyHandler = (props) => {

      
        try {

            console.log("check",  LoginResData.data.country_code, LoginResData.data.phoneno,LoginResData.data.otpid, wholeOtp)
            setIsLoading(true)

            dispatch(otpAction.verifyOtpLogin( LoginResData.data.country_code, LoginResData.data.phoneno,LoginResData.data.otpid, wholeOtp )).then((res) => {

                setIsLoading(false)


                console.log("=======",res)
                console.log("whole resdata of otp verify at login time for jwt token", res)
                console.log("whole token", res.data.JWTToken.accessToken)

                // Store the token
                // if (res.data.JWTToken) {

                // }

                if (res.status === 'success') {

                    handleToken(res)


                    navigation.replace('Profile')
                    Alert.alert(res.msg)
                } else {
                    Alert.alert(res.msg)
                }
            })

        } catch (error) {
            setIsLoading(false)

            if (error.message === "User Login successfully✅") {
                Alert.alert("Login Successful", "You have successfully registered!");
            } else {
                // General error alert
                Alert.alert("Login Failed", error.message);
            }
        }



    };


    // useEffect(() => {

    //     STATUSOFOTPLOGIN === "success" && OtpVerifyHandler()

    // }, [STATUSOFOTPLOGIN])


    const [countdown, setCountdown] = useState(60)
    const [timerId, setTimerId] = useState(null); // Timer ID to clear interval

    const startTimer = () => {
        setCountdown(60);

        if (timerId !== null) {
            clearInterval(timerId);
        }

        const newTimerId = setInterval(() => {
            setCountdown(prevCountdown => {
                if (prevCountdown > 0) {
                    return prevCountdown - 1;
                } else {
                    clearInterval(newTimerId); // Stop the timer 
                    return 0;
                }
            });
        }, 1000);

        // Update timerId state with the new interval ID
        setTimerId(newTimerId);

    };

    // Function to handle Resend OTP button click
    const otpHandler = () => {
        startTimer(); // Start the timer
        //resend OTP
        console.log("hello otp login")
        console.log(LoginResData.data.otpid)
        dispatch(otpAction.resendOtp(LoginResData.data.otpid)).then((res) => {

            console.log("hghdh", res)
            if (res.status === 'success') {
                Alert.alert(res.msg)
            } else {
                Alert.alert(res.msg)
            }
        })
        console.log("hello")
    };

    useEffect(() => {
        return () => {
            clearInterval(timerId);
        };
    }, []);


    // const otpHandler = () => {
    //     console.log("hello otp login")
    //     console.log(LoginResData.data.otpid)
    //     dispatch(otpAction.resendOtp(LoginResData.data.otpid)).then((res) => {

    //         console.log("hghdh", res)
    //         if (res.status === 'success') {

    //             Alert.alert(res.msg)
    //         } else {
    //             Alert.alert(res.msg)
    //         }
    //     })



    // }

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

                <MaterialIcons name='keyboard-backspace' color='black' size={25} style={{ flex: 1, lineHeight: 60 }} onPress={() => navigation.goBack()} />

            </View>



            <View style={styles.Txtcontainer}>

                <View style={{ flexDirection: 'row' }}>

                    <View style={styles.textContainer}>

                        <Text style={styles.title}>Verification Code</Text>
                        <Image source={require('../../../images/egg.png')} style={styles.ovelImage} />
                    </View>

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

                {/* <View style={styles.placeholderContainer}>{renderPlaceholderDots()}</View> */}
                {/* 
                <View style={styles.otpContainer}>
                <View style={styles.containers}>
                    <View style={styles.inputsContainer}>
                        {renderPlaceholderDots()}
                    </View>
                </View>
            </View>
 */}

            </View>


            {/* <View style={styles.container}>
                       <OTPInputView 
                            pinCount={4}
                            placeholderCharacter='1234'
                            style={{width: '80%', height: 200}}
                        />
                       </View> */}
            <View style={{ flex: 1 }}>

                <View style={styles.resendOtpContainer}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14 }}>Having Problem?</Text>
                        {/* <Text style={{ color: "black", fontSize: 14, }}> Resend Code</Text> */}
                        {/* <TouchableOpacity style={{}}> */}

                        <Text onPress={otpHandler}
                            disabled={countdown > 0 && countdown < 60} style={{ height: 30, color: countdown > 0 || countdown < 60 ? "#635e5e" : "black", fontSize: 14, }}
                        >Resend OTP</Text>

                        {/* </TouchableOpacity> */}

                    </View>

                    {(countdown > 0 && countdown < 60) ? <Text style={{ marginTop: 10 }}>Resend OTP in: {countdown} seconds</Text> : ''}
                </View>


            </View>


            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <CustomeButton style={{ padding: 15, }} onPress={OtpVerifyHandler}>Verify Now</CustomeButton>
            </View>


        </View>
    )

}


export default OtpLogin

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        marginHorizontal: 16

    },


    header: {
        height: 40,
        justifyContent: 'center',
        flexDirection: 'row',
    },

    textContainer: {
        position: 'relative'

    },

    ovelImage: {
        position: 'absolute',
        right: "-3%",
        top: -3,
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
        marginVertical: 15,
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

    // placeholderContainer: {
    //     width: "61%",
    //     // borderColor: 'red',
    //     // borderWidth: 1,
    //     zIndex: 1,
    //     position: 'absolute',
    //     flexDirection: 'row',
    //     justifyContent: 'space-between',
    //     // alignItems: 'center'
    // },

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

    otpContainer: {

        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    containers: {
        borderRadius: 8,
        padding: 10,
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'gray',
        borderWidth: 1,
    },
    inputsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    resendOtpContainer: {
        justifyContent: 'center', alignItems: 'center', marginTop: 10
    }


})