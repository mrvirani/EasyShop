import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const PaymentCard = ({ cardNameOrNumber, expiryIn, imageSource,expiryStyle }) => {

    console.log(cardNameOrNumber, expiryIn, imageSource, expiryStyle)

    return (
        <View style={styles.conatiner}>

            <View style={styles.cardContainer}>
                <Image source={imageSource} style={styles.image} />
                <View style={styles.card}>
                    <View style={styles.innerContainer}>
                        <Text style={[styles.cardNumber, expiryStyle]}>{cardNameOrNumber}</Text>
                        <MaterialCommunityIcons name="square-edit-outline" color='green' size={23} style={styles.editIcon} />
                    </View>

                    <Text style={[styles.text, expiryStyle]}>{expiryIn}</Text>
                </View>

                <MaterialCommunityIcons name="check-circle" color='gray' size={28} style={styles.checkIcon} />
            </View>

        </View>
    )
}

 
export default PaymentCard


const styles = StyleSheet.create({


    conatiner: {
        flex: 1,
        width: Dimensions.get('window').width,
        // marginHorizontal: 16
    },

    image: {
        width: 50,
        height: 30,
        alignSelf: 'center',
        marginHorizontal: 5
    },

    cardContainer: {
        padding: 10,
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 5,
        elevation: 3,
        borderColor:'black',
        height:80
        // marginHorizontal: 35,
        // backgroundColor:'yellow',
        // justifyContent: 'center'
    },
    innerContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        // backgroundColor: 'red',
    },

    editIcon: {
        marginHorizontal: 10,
        top: 3
    },

    cardNumber: {
        color: 'black',
        top: 6
    },
    text: {
        color: 'black',
        marginHorizontal: 15,
        marginVertical: 8
        // alignSelf:'center'
    },

    checkIcon: {
        // marginRight: 5,
        alignSelf: 'center',


    },

    card: {
        flex: 1,
        // backgroundColor:'green'
    }







})