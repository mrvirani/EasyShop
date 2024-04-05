import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef, useState } from 'react'

import { Formik } from 'formik';
import * as Yup from 'yup';


import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons from 'react-native-vector-icons/FontAwesome6'

import PhoneInput from "react-native-phone-number-input";

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import CustomeButton from '../../components/CustomeButton';



const Signup = (props) => {

    //     const [password, setPassword] = useState('');  
    // const [isPasswordSecure, setIsPasswordSecure] = useState(true);

    const [value, setValue] = useState('')
    const [formatedNumber, setFormatedNumber] = useState('')
    const [validate, setValidate] = useState(false)
    const phoneInput = useRef()

    const [showPassword, setShowPassword] = useState(false)
    const [checkBox, setCheckBox] = useState(false)


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
            .matches(/(?=.*[!@#$%^&*])/, 'Password must contain a non-alphanumeric character.')
            .required('Password is Required'),
    });

    // console.log(validationSchema)

    const SubmitHandler = async (values) => {

       
        console.log(value)
        values.phoneNumber = value
        console.log(values)

        const checkValid = phoneInput.current?.isValidNumber(value)
        setValidate(checkValid ? checkValid : false)

        if (checkValid === true) {
            props.navigation.navigate('Home')
        }


    }


    return (

        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} >
            <View style={styles.screen}>
                <View style={styles.container}>

                    <Text style={styles.title}>Welcome to EasyShop</Text>
                    <Text style={styles.summary}>And Enjoy life during time you.</Text>
                </View>




                <View style={styles.container}>
                    <Formik
                        initialValues={{ firstName: '', lastName: '',phoneNumber: '', password: '' }}
                        validationSchema={Validation}
                        onSubmit={SubmitHandler}
                    >
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
                                        defaultValue= {value}
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

                                {!validate ? <Text style={styles.errorText}>Phone number is Required</Text> : null}



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

                                    <CustomeButton onPress={handleSubmit} style={styles.Submitbtn} >Submit</CustomeButton>
                                </View>

                                <View style={{ alignItems: 'center' }}>
                                    <Text>Already have an account?</Text>
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

    title: {
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
        marginTop: 70
    }
});

