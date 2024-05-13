import { ActivityIndicator, Alert, Button, Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/FontAwesome6'

import PhoneInput from "react-native-phone-number-input";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import CustomeButton from '../../components/ui/atoms/CustomeButton';
// import Input from '../../../components/UI/Input';

import { useDispatch, useSelector } from 'react-redux'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import * as AuthAction from '../../utiles/localStorage/store/actions/Auth'





const Signup = (props) => {


    //     const [password, setPassword] = useState('');  
    // const [isPasswordSecure, setIsPasswordSecure] = useState(true);

    const [value, setValue] = useState('') //phone number set kare chhe 9909588273
    const [formatedNumber, setFormatedNumber] = useState('')    // 91 9909588273
    const [validate, setValidate] = useState(false)  // based on library of REACT_NATIVE_PHONE_NUMBER_INPUT
    const phoneInput = useRef()

    const [showPassword, setShowPassword] = useState(false)
    const [checkBox, setCheckBox] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

    const statusRegister = useSelector(state => state.auth.statusRegister)
    const signUpData = useSelector(state => state.auth.signUpData)

    if(value.length >10){
        Alert.alert("Please Enter valid mobile Number")
    }


    const dispatch = useDispatch()



    const Validation = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('First Name is Required'),
        lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Last Name is Required'),

        email: Yup.string()
            .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, ' Email address is not valid')
            .required('Email is Required'),

        password: Yup.string()
            .min(8, 'Must be at least 8 characters')
            .matches(/(?=.*[0-9])/, 'Password must contain a number.')
            .matches(/(?=.*[a-z])/, 'Password must contain a lowercase letter.')
            .matches(/(?=.*[A-Z])/, 'Password must contain an uppercase letter.')
            // .matches(/(?=.*[!@#$%^&*])/, 'Password must contain a non-alphanumeric character.')
            .required('Password is Required'),
    });

    // console.log(validationSchema)

    const SubmitHandler = (values, actions) => {
        const checkValid = phoneInput.current?.isValidNumber(values.phoneNumber);
        const country_code = "+" + phoneInput.current?.getCallingCode();
        values.country_code = country_code
        values.phoneNumber = value

        
        if (!checkBox) {
            console.log("Checkbox is unchecked, showing alert");
            Alert.alert("Checkbox Unchecked", "Please fill the checkbox to proceed.");
        }
    


        let formData = new FormData();
        formData.append('role', 1)
        formData.append('email', values.email);
        formData.append('password', values.password);
        formData.append('country_code', values.country_code);
        formData.append('phoneno', values.phoneNumber);
        formData.append('firstname', values.firstName);
        formData.append('lastname', values.lastName);

        console.log("country_code is=====>", values.country_code);
        setValidate(checkValid ? checkValid : false);


        setIsLoading(true)


        dispatch(AuthAction.signUp(formData)).then((res) => {

            setIsLoading(false)


            console.log("hghdh", res.msg)
            if (res.status === 'success') {
                props.navigation.navigate('Otp')
                Alert.alert(res.msg)
            } else {
                setIsLoading(false)

                Alert.alert(res.msg)
            }
        })


        // if (dispatch(AuthAction.signUp(formData))) {

        //     console.log("statusRegister",statusRegister)

        //     if(statusRegister === "success"){
        //         props.navigation.navigate('Otp');
        //     }else{
        //         if(signUpData.msg === "User already exists👀"){
        //             Alert.alert("Already Register!!", "Dear friend you are already register with this number")
        //         }
        //     }

        //     // if(statusRegister === "success"){
        //     //     Alert.alert("Already Register!!", "Dear friend you are already register with this number")
        //     // }else if(statusRegister === "error"){
        //     //         Alert.alert("Error Occured","you have an Error in form or you are already register with this number")
        //     // }else if(msg === "User already exists👀"){
        //     //     ToastAndroid.ToastAndroid("Dear Friend You are already register with this number")
        //     // }

        // }

        // if (checkValid === true) {
        //     try {
        //     } catch (error) {
        //         console.error('Sign-up failed:', error);
        //         // Handle sign-up failure, if needed
        //     }
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

        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.screen}>

                <View style={styles.header}>

                    <MaterialIcons name='keyboard-backspace' color='black' size={25} style={{ flex: 1, marginLeft: 8, lineHeight: 60, }} onPress={() => props.navigation.goBack()} />

                </View>

                <View style={styles.container}>



                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Welcome to EasyShop</Text>
                        <Image source={require('../../assets/images/egg.png')} style={styles.ovelImage} />
                    </View>
                    <Text style={styles.summary}>And Enjoy life during time you.</Text>
                </View>




                <View style={styles.container}>
                    <Formik
                        initialValues={{ firstName: '', lastName: '', phoneNumber: '', password: '' }}
                        validationSchema={Validation}
                        onSubmit={SubmitHandler}>

                        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                            <View>

                                <Text style={styles.titletxt}>First Name</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleChange('firstName')}
                                    onBlur={handleBlur('firstName')}
                                    value={values.firstName}
                                    placeholder="Enter first Name"
                                />
                                {touched.firstName && errors.firstName ? (
                                    <Text style={styles.errorText}>{errors.firstName}</Text>
                                ) : null}

                                {/* <Input
                            lable="First Name"
                            onChangeText={handleChange('firstName')}
                            onBlur={handleBlur('firstName')}
                            value={value.firstName}
                            placeholder="enter first Name"
                            error={errors.firstName}
                            touched={touched.firstName}
                            /> */}


                                <Text style={styles.titletxt}>Last Name</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleChange('lastName')}
                                    onBlur={handleBlur('lastName')}
                                    value={values.lastName}
                                    placeholder="Enter last Name"
                                />
                                {touched.lastName && errors.lastName ? (
                                    <Text style={styles.errorText}>{errors.lastName}</Text>
                                ) : null}


                                <Text style={styles.titletxt}>Email</Text>
                                <TextInput
                                    style={styles.input}
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    placeholder="Enter e-mail address"
                                />
                                {touched.password && errors.password ? (
                                    <Text style={styles.errorText}>{errors.email}</Text>
                                ) : null}


                                <Text style={styles.titletxt}>Phone No</Text>

                                <View style={{ marginBottom: 10 }}>
                                    <PhoneInput
                                        ref={phoneInput}
                                        defaultCode='IN'
                                        defaultValue={value}
                                        onChangeText={(text) => setValue(text)}
                                        onChangeFormattedText={(text) => setFormatedNumber(text)}
                                        withShadow
                                        containerStyle={{
                                            width: '100%',
                                            height: 50,
                                            borderRadius: 50,
                                            marginBottom: 10,
                                            backgroundColor: '#eae3e3',
                                        }}
                                        textContainerStyle={{ borderRadius: 50, backgroundColor: '#eae3e3' }}
                                        textInputStyle={{ color: 'black', padding: -40, marginTop: -10, marginBottom: -13 }}

                                    />
                                </View>

                                {(value.length >10 || value.length==0) ? <Text style={styles.errorText}>Phone number is Required</Text> : null}



                                <Text style={styles.titletxt}>Password</Text>
                                <View style={{
                                    width: '100%',
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: '#eae3e3',
                                    borderRadius: 50,

                                }}>

                                    <TextInput
                                        style={{ flex: 1, paddingTop: 10, paddingRight: 10, paddingLeft: 20 }}
                                        onChangeText={handleChange('password')}
                                        onBlur={handleBlur('password')}
                                        value={values.password}
                                        placeholder="Enter Password"
                                        secureTextEntry={!showPassword}
                                    />

                                    <Icon name={showPassword ? "eye" : 'eye-off'}
                                        color="black"
                                        size={20}
                                        onPress={() => setShowPassword(!showPassword)}
                                        style={{ margin: 10, paddingRight: 10 }} />

                                </View>
                                {touched.password && errors.password ? (
                                    <Text style={styles.errorText}>{errors.password}</Text>
                                ) : null}

                                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                                    <Icons name="circle-check" size={20} color={checkBox ? "#FC2779" : "#C9C9C9"} onPress={() => setCheckBox(!checkBox)} />
                                    <Text style={{ paddingHorizontal: 10 }}>
                                        By creating this account, you have agree with <Text> Terms of Services.</Text>
                                    </Text>
                                </View>

                                <View style={{ flex: 1, alignItems: 'center' }}>
                                    <CustomeButton onPress={handleSubmit}
                                    style={[
                                        styles.Submitbtn,
                                        !checkBox ? styles.disabledSubmitBtn : {}
                                    ]}
                                    disabled={!checkBox} 
                                    >Submit</CustomeButton>
                                </View>

                                <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
                                    <Text>Already have an account?</Text>
                                    <Text style={{ color: 'black' }} onPress={() => props.navigation.navigate('Login')}> Login</Text>
                                </View>


                            </View>
                        )}
                    </Formik>
                </View>




            </View>
        </KeyboardAwareScrollView>

    )
}

export default Signup

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        marginHorizontal: 16
    },

    // container: {
    //     marginVertical: 20
    // },

    textContainer: {
        position: 'relative'

    },

    ovelImage: {
        position: 'absolute',
        top: -2,
        right: "35%",
        zIndex: 0
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

    container: {
        padding: 10,
        top:-20
    },
    input: {

        borderWidth: 1,
        borderColor: '#eae3e3',
        backgroundColor: '#eae3e3',
        borderRadius: 50,
        padding: 10,
        marginBottom: 10,
        paddingStart: 20
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },

    titletxt: {
        padding: 8
    },

    Submitbtn: {
        height: 50,
        marginTop: 70,
        // backgroundColor:checkBox === true ?'#FB5193':'#FB5193'
    },

    disabledSubmitBtn: {
        backgroundColor: 'gray', // Background color for disabled state
    }
});

