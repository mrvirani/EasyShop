import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import PaymentCard from '../ProfileSection/PaymentCard'
import * as savedCardAction from '../../../store/Actions/Auth'
import { useDispatch } from 'react-redux'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PaymentMethods = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        // Dispatch action to fetch user data when page loads
        dispatch(savedCardAction.saved_cards());
    }, [dispatch]);


    return (
        <View style={{flex:1}}>

            <View style={styles.header}>
                <MaterialIcons name='keyboard-backspace' color='black' size={25} style={{ left: 10, lineHeight: 60 }} onPress={() => navigation.goBack()} />
                <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, color: 'black', }}>Account details</Text>
            </View>

            <Text>Wallet</Text>

            <PaymentCard
                cardNameOrNumber={"Available Balance"}
                expiryIn={"$350"}
                expiryStyle={{ color: 'black', fontWeight: "10" }}
            />


            <PaymentCard
                cardNameOrNumber="1234 5678 1234 5678"
                expiryIn="Expire 08/24"
                // imageSource={require('../../../images/images/MasterCard_Logo.svg.webp')}
                imageSource={require('../../../images/MasterCard_Logo.svg.webp')}
            />




            {/* <Text>Saved Cards</Text>

            <FlatList
                data={ }
                renderItem={({ itemdata }) => <PaymentCard cardNameOrNumber="1234 5678 1234 5678"
                    expiryIn="08/24"
                    // imageSource={require('../../../images/images/MasterCard_Logo.svg.webp')}
                    imageSource={require('../../../images/MasterCard_Logo.svg.webp')} />}
            />


            <Text> Others Payments Options</Text>
            <FlatList
                data={ }
                renderItem={({ itemdata }) => <PaymentCard cardNameOrNumber="1234 5678 1234 5678"
                    expiryIn="08/24"
                    // imageSource={require('../../../images/images/MasterCard_Logo.svg.webp')}
                    imageSource={require('../../../images/MasterCard_Logo.svg.webp')} />}
            /> */}



        </View>
    )
}

export default PaymentMethods

const styles = StyleSheet.create({

    header: {
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor: 'white',
        alignItems: 'center',
    },

})