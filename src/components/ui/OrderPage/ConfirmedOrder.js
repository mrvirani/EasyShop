import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomeButton from '../atoms/CustomeButton'
import Metrics from '../../../assets/Metrics/Metrics'
import Font from '../../../assets/fonts'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Rating } from 'react-native-ratings';
import { TextInput } from 'react-native'

const generateRandomNumber = () => {
    const prefix = Math.floor(1000 + Math.random() * 9000); // Generate random 4-digit prefix
    const suffix = Math.floor(1000000000 + Math.random() * 9000000000); // Generate random 10-digit suffix
    return `${prefix}${suffix}`
}

const confirmOrder = [
    {
        name: 'Colorful Short T-Shirt',
        price: '10',
        color: 'White',
        size: 'XL',
        quantity: 2
    },
    {
        name: 'All Makeup Products with Brushes',
        price: '85',
        color: 'White',
        size: 'XL',
        quantity: 1
    },
]

const pastOrder = [
    {
        name: 'Colorful Short T-Shirt',
        price: '10',
        color: 'White',
        size: 'XL',
        quantity: 2
    },
    {
        name: 'All Makeup Products with Brushes',
        price: '85',
        color: 'White',
        size: 'XL',
        quantity: 1
    },
]


const renderConfirmOrder = (itemData) => {


    return (
        <View style={styles.orderContainer}>
            <View style={styles.rowContainer}>
                <View style={styles.imageContainer}>
                    <MaterialIcons name='notifications' size={28} color='#fb5193' />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.titleText,]} numberOfLines={2}>{itemData.item.name}</Text>
                        <Text style={[styles.text, { color: 'gray' }]}>{itemData.item.color}</Text>
                        <Text style={[styles.text, { color: 'gray' }]}>{itemData.item.size}</Text>
                        <Text style={[styles.text, { color: 'gray' }]}>Qty: {itemData.item.quantity}</Text>
                    </View>
                    <CustomeButton style={{ width: Metrics.CountScale(70), height: Metrics.CountScale(35), marginHorizontal: 0 }}>$ 10.00</CustomeButton>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text, { color: 'gray', flex: 0, height: Metrics.CountScale(20) }]}>Payment ID:</Text>
                <Text style={[styles.text, { color: 'black', fontWeight: 'bold', marginHorizontal: -10 }]}>#{Math.floor((Math.random() * 1000000) + 1)}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text, { color: 'gray', flex: 0, height: Metrics.CountScale(20) }]}>Order ID:</Text>
                <Text style={[styles.text, { color: 'black', fontWeight: 'bold', marginHorizontal: -10 }]}>{generateRandomNumber()}</Text>
            </View>
            <View style={styles.seperator} />


        </View>
    )
}

const renderPastOrder = (itemData) => {

    return (
        <View style={styles.orderContainer}>
            <View style={styles.rowContainer}>
                <View style={styles.imageContainer}>
                    <MaterialIcons name='notifications' size={28} color='#fb5193' />
                </View>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={[styles.titleText,]} numberOfLines={2}>{itemData.item.name}</Text>
                        <Text style={[styles.text, { color: 'gray' }]}>{itemData.item.color}</Text>
                        <Text style={[styles.text, { color: 'gray' }]}>{itemData.item.size}</Text>
                        <Text style={[styles.text, { color: 'gray' }]}>Qty: {itemData.item.quantity}</Text>
                    </View>
                    <CustomeButton style={{ width: Metrics.CountScale(70), height: Metrics.CountScale(35), marginHorizontal: 0 }}>$ 10.00</CustomeButton>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[styles.text, { color: 'gray', flex: 0, height: Metrics.CountScale(20) }]}>Payment ID:</Text>
                <Text style={[styles.text, { color: 'black', fontWeight: 'bold', marginHorizontal: -10 }]}>#{Math.floor((Math.random() * 1000000) + 1)}</Text>
            </View>
            <View style={{ flexDirection: 'row', height: Metrics.CountScale(20) }}>
                <Text style={[styles.text, { color: 'gray', flex: 0, }]}>Order ID:</Text>
                <Text style={[styles.text, { color: 'black', fontWeight: 'bold', marginHorizontal: -10 }]}>{generateRandomNumber()}</Text>
            </View>
            <Text style={[styles.text, { color: 'green', flex: 0, height: Metrics.CountScale(20) }]}>Delivered on Feb 07</Text>
            <View style={styles.seperator} />
            <View style={{ flexDirection: 'row', }}>
                <Rating
                    type='star'
                    imageSize={15}
                    onFinishRating={() => { }}
                    style={{ alignSelf: 'flex-start', backgroundColor: 'white', marginHorizontal: 10 }}
                />
                <Text style={{ flex: 1 }}>2 days ago</Text>
                <Text style={{ color: '#FC2779', marginHorizontal: 10 }}>Edit</Text>
            </View>
            <Text style={{ margin: Metrics.CountScale(5) }}>Wow! I was pleasantly surprised by the quality of this product. It exceeded my expectations in every way. The design is sleek, the functionality is smooth, and the durability is impressive. </Text>

            <View style={styles.seperator} />
        </View>
    )
}

const ConfirmedOrder = () => {

    return (
        <View style={styles.screen}>
            <ScrollView>
                
            <View style={styles.container}>
                <Text style={{ color: 'black', fontSize: 16, fontFamily: Font.CairoBold, fontWeight: 'bold' }}>Current Order</Text>

                <FlatList
                    data={confirmOrder}
                    renderItem={renderConfirmOrder}
                />
                <Text style={{ color: 'black', fontSize: 16, fontFamily: Font.CairoBold, fontWeight: 'bold' }}>Past Order</Text>
                <FlatList
                    data={pastOrder}
                    renderItem={renderPastOrder}
                />

            </View>
            </ScrollView>
        </View>
    )
}

export default ConfirmedOrder

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: 'white'
    },
    rowContainer: {
        flexDirection: 'row',
        margin: Metrics.CountScale(5),
        height: Metrics.CountScale(65),
    },

    container: {
        marginHorizontal: Metrics.CountScale(15)
    },

    imageContainer: {
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#EBF5FE',
        width: Metrics.CountScale(60),
        height: Metrics.CountScale(60),
        borderRadius: Metrics.CountScale(15),
        elevation: 2,
        alignSelf: 'center',
    },

    iconContainer: {
        width: Metrics.CountScale(50),
        height: Metrics.CountScale(50),
    },

    titleText: {
        flex: 1,
        marginHorizontal: Metrics.CountScale(15),
        color: 'black',
        fontFamily: Font.CairoBold,
        fontSize: Metrics.CountScale(13),
        fontWeight: 'bold',
        fontSize: Metrics.CountScale(14),
    },

    text: {
        flex: 1,
        marginHorizontal: Metrics.CountScale(15),
        fontFamily: Font.CairoBold,
        fontSize: Metrics.CountScale(12),
    },
    seperator: {
        borderColor: 'gray',
        borderWidth: 0.6,
        marginVertical: Metrics.CountScale(5),
    },

    orderContainer: {
        marginVertical: 6
    },
    reviewContainer: {
        flexDirection: 'row'
    }

})