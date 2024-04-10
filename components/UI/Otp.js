import { Alert, Dimensions, Pressable, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'



import { OtpInput } from "react-native-otp-entry";

import Icon from "react-native-vector-icons/Octicons"
import CustomeButton from '../CustomeButton';
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { useDispatch, useSelector } from 'react-redux';
import * as otpAction from '../../store/Actions/Auth'
import { TouchableNativeFeedback } from 'react-native';

const { width, height } = Dimensions.get('window')

const Otp = ({ route, navigation }) => {

    // const { resData } = route.params;
    // const dispatch = useDispatch();


    const [otp, setOtp] = useState('');
    const [wholeOtp, setWholeOtp] = useState('')

    const SelectStatus = useSelector(state => state.statusRegister) // sign up data status: success or error

    console.log("SelectStatus===>", SelectStatus)

    const [performAction, setPerformAction] = useState();


    // const [performAction, setPerformAction] = useState(SelectStatus === "success" ? setPerformAction("login") : setPerformAction("register"))

    // console.log(initialPerformAction)

    const dispatch = useDispatch();

    const statusOfOtp = useSelector(state => state.auth.signUpData)    //response data of signup // user register karse tyarno


    console.log("statusOfOtp===>", statusOfOtp)

    const STATUSOFOTP = useSelector(state => state.auth.status)   //

    console.log("STATUSOFOTP====>", STATUSOFOTP)

    // const LoginResData = useSelector(state => state.auth.data) //login response data

    // console.log("LoginResData=====>", LoginResData)

    const STATUSOFOTPLOGIN = useSelector(state => state.auth.status)

    const OTPID = useSelector(state=>state.auth.)

    useEffect(() => {
        // Determine the initial value for performAction based on SelectStatus
        const initialPerformAction = SelectStatus === "success" ? "login" : "register";
        setPerformAction(initialPerformAction);
    }, [SelectStatus]);



    const renderPlaceholderDots = () => {
        const PlacehoderDots = []
        for (let i = 0; i < 4; i++) {
            PlacehoderDots.push(
                <Icon name={otp[i] ? "" : 'dot-fill'} color="#FB5193" size={28} />
            )
        }
        return PlacehoderDots
    }


    // const email = statusOfOtp?.data?.email;

    const OtpVerifyHandler = (props) => {

        let formData = new FormData();

        // if (performAction === "login") {


        //     formData.append('country_code', LoginResData.data.country_code);
        //     formData.append('phoneno', LoginResData.data.phoneno),
        //         formData.append('otpid', LoginResData.data.otpid),
        //         formData.append('enteredotp', wholeOtp)

        //     dispatch(otpAction.verifyOtpLogin(formData))


        // } else if (performAction === "register") {


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

            // props.navigation.navigate('Login')
            if(dispatch(otpAction.verifyOtpRegister(formData))){
                // props.navigation.navigate('Login')
            }



        // }









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

        // if (email) {
            STATUSOFOTP === "success" && OtpVerifyHandler()

                // props.navigation.navigate('Login')
            

            // else if (STATUSOFOTPLOGIN === "success" && OtpVerifyHandler()) {
            //     props.navigation.navigate('Login')
            // }
            //STATUSOFOTP ==="error" && props.navigation.navigate('Login')

        

    }, [])


    const [countdown, setCountdown] = useState(30)
    const [timerId, setTimerId] = useState(null); // Timer ID to clear interval

    const startTimer = () => {
        setCountdown(30); 
  
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
    const handleResendOtp = () => {
        startTimer(); // Start the timer
        // Add logic to resend OTP
        console.log("hello")
        dispatch(otpAction.resendOtp(otpid))
    };

    useEffect(() => {
        return () => {
            clearInterval(timerId);
        };
    }, []);




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
            <View style={{ flex: 1 }}>

                <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 14 }}>Having Problem?</Text>
                        {/* <Text style={{ color: "black", fontSize: 14, }}> Resend Code</Text> */}
                        {/* <TouchableOpacity style={{}}> */}
                            <Text  onPress={handleResendOtp} disabled={ countdown > 0 && countdown< 30}  style={{  height:30,color: countdown > 0 || countdown < 30 ? "#635e5e" : "black", fontSize: 14, }}>Resend OTP</Text>
                        {/* </TouchableOpacity> */}

                    </View>

                   {(countdown > 0 && countdown<30)?  <Text style={{ marginTop: 10 }}>Resend OTP in: {countdown} seconds</Text>: ''}
                </View>


            </View>


            <View style={{ alignItems: 'center', marginBottom: 20 }}>
                <CustomeButton style={{ padding: 15,  }}   onPress={OtpVerifyHandler}>Verify Now</CustomeButton>
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