import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import PaymentCard from './PaymentCard'
import * as savedCardAction from '../../../utiles/localStorage/store/actions/Auth'
import { useDispatch, useSelector } from 'react-redux'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { RefreshControl } from 'react-native'

const PaymentMethods = () => {

    const [refreshing, setRefreshing] = useState(false);

    const dispatch = useDispatch()
    const savedCardDetails = useSelector(state => state.auth.savedCardDetails)

    console.log("savedCardDetails", savedCardDetails)

    useEffect(() => {
        getSavedCardsDetails();
    }, []);

    const getSavedCardsDetails = () => {
        setRefreshing(true)
        dispatch(savedCardAction.saved_cards()).then((res) => {
            console.log("get saved cards", res)
        })
            .catch(error => console.log('Error fetching in get saved cards:', error))
            .finally(() => setRefreshing(false));

        setRefreshing(false);
    }

    const onRefresh = () => {
        setRefreshing(true);
        // getUsersAdddressDetails()

    };


    return (
        <View style={{ flex: 1 }}>

            <View style={styles.header}>
                <MaterialIcons name='keyboard-backspace' color='black' size={25} style={{ left: 10, lineHeight: 60 }} onPress={() => navigation.goBack()} />
                <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, color: 'black', }}>Account details</Text>
            </View>

            <ScrollView refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }>

                <View style={styles.container}>



                    <Text style={styles.titleText}>Wallet</Text>

                    <PaymentCard
                        cardNameOrNumber={"Available Balance"}
                        expiryIn={"$350"}
                        expiryStyle={{ color: 'black', fontWeight: "10" }}
                        imageSource={require('../../../assets/images/icons8-wallet-48.png')}
                    />
                    <View style={styles.divider}></View>


                    <Text style={styles.titleText}>Saved Cards</Text>

                    {savedCardDetails?.data?.cards.map((card, index) => (

                        <PaymentCard
                            cardNameOrNumber={card.card_num}
                            expiryIn={`Expire ${card.expiry}`}
                            // imageSource={require('../../../images/images/MasterCard_Logo.svg.webp')}
                            imageSource={require('../../../assets/images/MasterCard_Logo.svg.webp')}
                        />
                    ))}

                    <Text style={styles.titleText}>Others Payment options</Text>

                    {savedCardDetails?.data?.cards.map((card, index) => (

                        <PaymentCard
                            cardNameOrNumber={card.card_num}
                            expiryIn={`Expire ${card.expiry}`}
                            // imageSource={require('../../../images/images/MasterCard_Logo.svg.webp')}
                            imageSource={require('../../../assets/images/MasterCard_Logo.svg.webp')}
                        />
                    ))}







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

            </ScrollView>



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

    container: {
        marginHorizontal: 16,
        justifyContent: 'center'
    },

    divider: {
        width: '100%',
        height: 1,
        borderWidth: 1,
        marginHorizontal: 49,
        // borderColor:'black',
        alignSelf: 'center'
    },

    titleText: {
        color: 'black',
        fontSize: 16,
        marginVertical: 5,
        marginHorizontal: 5,
        top: 5
    }

})