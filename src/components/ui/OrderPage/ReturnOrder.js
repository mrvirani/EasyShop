import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomeButton from '../atoms/CustomeButton'
import Metrics from '../../../assets/Metrics/Metrics'
import Font from '../../../assets/fonts'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { ScrollView } from 'react-native'

const confirmOrder = [
  {
    name: 'Colorful Short T-Shirt',
    price: '10',
    color: 'White',
    size: 'XL',
    quantity: 2,
    status: 'Returned Request Approved'
  },
  {
    name: 'All Makeup Products with Brushes',
    price: '85',
    color: 'White',
    size: 'XL',
    quantity: 1,
    status: 'Successfully Returned'

  },
]

const renderConfirmOrder = (itemData) => {
  //   const colorStyle = {
  //     color: itemData.item.status === 'Successfully Returned' ? 'pink' : 'black'
  // };

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
      <Text style={[styles.text, { color: 'red', flex: 0, height: Metrics.CountScale(20) }]}>{itemData.item.status}</Text>

      <View style={styles.seperator} />



    </View>
  )
}

const ReturnOrder = () => {
  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{ color: 'black', fontSize: 16, fontFamily: Font.CairoBold, fontWeight: 'bold' }}>Current Order</Text>

          <FlatList
            data={confirmOrder}
            renderItem={renderConfirmOrder}
          />
        </View>
      </ScrollView>
    </View>
  )
}

export default ReturnOrder

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
})