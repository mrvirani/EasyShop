import { Alert, Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import CreditCardInput from 'react-native-payment-card'
import CustomeButton from '../atoms/CustomeButton';

import Evillcons from 'react-native-vector-icons/EvilIcons'
import { useDispatch } from 'react-redux';

import * as sendCardDetailsAction from '../../../utiles/localStorage/store/actions/Auth'



const AddCard = (props) => {

    // const handleCardInputChange = (form) => {
    //     console.log(form);
    //     // You can access form.values.number, form.values.expiry, form.values.cvc, and form.values.name
    //     // Perform additional validation or processing here
    //   };

    const dispatch = useDispatch()


    const [cardNumber, setCardNumber] = useState('');
    const [isCardNumberValid, setIsCardNumberValid] = useState(false);

    const [name, setName] = useState('')
    const [isNameValid, setNameValid] = useState(false)

    const [expiry, setExpiry] = useState('')
    const [isExpiryValid, setExpiryValid] = useState(false)

    const [cvv, setcvv] = useState('')
    const [isCvvValid, setCvvValid] = useState(false)

    const formatCardNumber = (text) => {
        // Remove any non-digit characters from the input       
        const digitsOnly = text.replace(/\D/g, '');

        // // Check if the length of digitsOnly is less than or equal to 16
        const isValid = digitsOnly.length <= 16 && digitsOnly.length>0;
        setIsCardNumberValid(isValid);

        // // Add a space after every four digits
        // let formattedValue = '';
        // for (let i = 0; i < digitsOnly.length; i++) {
        //     if (i > 0 && i % 4 === 0) {
        //         formattedValue += ' ';
        //     }
        //     formattedValue += digitsOnly.charAt(i);
        // }

        // Update the state with the formatted value
        setCardNumber(text);
    };

    const validateName = (text) => {
        // Regular expression to match only letters and spaces
        const nameRegex = /^[a-zA-Z\s]+$/;
        const isValid = nameRegex.test(text);
        setNameValid(isValid);
        setName(text);
    };


    const validateExpiry = (text) => {
        // Check if the text contains only digits and slash
        const isValidFormat = /^[0-9/]*$/.test(text);
        if (isValidFormat) {
            // Insert a slash after the second character if it's missing
            if (text.length === 2 && expiry.length === 1 && text.charAt(1) !== '/') {
                text += '/';
            }
            // Extract MM and YY parts
            const parts = text.split('/');
            const month = parseInt(parts[0], 10);
            const year = parseInt(parts[1], 10);
            // Get current year (last two digits)
            const currentYear = parseInt(new Date().getFullYear().toString().substr(-2));
            // Validate MM/YY format
            const isValid =
                parts.length === 2 &&
                month >= 1 && month <= 12 && // Month should be between 1 and 12
                (year >= currentYear && year <= currentYear + 30); // Year should be between currentYear and currentYear + 30
            setExpiryValid(isValid);
        } else {
            setExpiryValid(false);
        }
        setExpiry(text);
    };


    const validateCVV = (text) => {
        const cvvRegex = /^[0-9]{3}$/;
        const isValid = cvvRegex.test(text);
        setCvvValid(isValid);
        setcvv(text);
    };


    const submitHandler = (props) => {
        if (isCardNumberValid && isNameValid && isExpiryValid && isCvvValid) {
            // props.navigation.navigate('AccountDetails')

            dispatch(sendCardDetailsAction.sendCardDetails(cardNumber,name, cvv, expiry)).then((res)=>{

                console.log(res)
            })
            
            Alert.alert('Success', 'Card submitted successfully');
        } else {
            Alert.alert('Error', 'Please fill in all fields');
        }
    }

    return (
        <View style={styles.screen}>

            <View style={styles.header}>
                <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, color: 'black', }}>Add card</Text>
            </View>

            <View style={styles.container}>

                <Text style={styles.text}>Card Number</Text>

                <View style={styles.row}>
                    <TextInput
                        placeholder='1234 5678 1234 5678'
                        onChangeText={formatCardNumber}
                        value={cardNumber}
                        maxLength={19}
                        keyboardType='numeric'
                        style={styles.inputFiled}
                    />
                    {isCardNumberValid && (
                        <Evillcons name="check" size={24} color="green" style={styles.icon} />
                    )}

                </View>

                <Text style={styles.text}>Card Holder Name</Text>
                <View style={styles.row}>
                    <TextInput
                        placeholder='XYZ '
                        onChangeText={validateName}
                        value={name}
                        keyboardType='default'
                        style={styles.inputFiled}
                    />
                    {isNameValid && (
                        <Evillcons name="check" size={24} color="green" style={styles.icon} />
                    )}
                </View>

                <View style={{ flexDirection: 'row', left: -8 }}>
                    <View style={styles.expiryfild}>
                        <Text style={styles.text}>Expiry</Text>
                        <View style={styles.row}>
                            <TextInput
                                placeholder='MM/YY'
                                onChangeText={validateExpiry}
                                value={expiry}
                                keyboardType='numeric'
                                style={styles.inputFiled}
                            />
                            {isExpiryValid && (
                                <Evillcons name="check" size={24} color="green" style={styles.icon} />
                            )}
                        </View>

                    </View>
                    <View style={styles.cvvfild}>

                        <Text style={styles.text}>CVV</Text>
                        <View style={styles.row}>
                            <TextInput
                                placeholder=''
                                onChangeText={validateCVV}
                                secureTextEntry={true}
                                value={cvv}
                                maxLength={3}
                                keyboardType='numeric'
                                style={styles.inputFiled}
                            />
                            {isCvvValid && (
                                <Evillcons name="check" size={24} color="green" style={styles.icon} />
                            )}

                        </View>

                    </View>

                </View>

            </View>

            <CustomeButton style={styles.saveBtn} onPress={submitHandler}>Submit</CustomeButton>


        </View>


    )
}

export default AddCard

const styles = StyleSheet.create({

    screen: {
        flex: 1,

    },

    header: {
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        marginHorizontal: 20
    },


    expiryfild: {
        flex: 1,
        marginHorizontal: 10,
        // backgroundColor:'red'


    },

    text: {
        color: 'black',
        margin: 5,
        marginTop: 30
    },

    cvvfild: {
        flex: 1,

    },


    row: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eae3e3',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black'
    },

    inputFiled: {
        flex: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 8,



    },

    icon: {
        marginLeft: 10,
        marginRight: 15,
    },

    saveBtn: {
        alignSelf: 'center',
        marginBottom: 20,
        padding: 15
    },

})