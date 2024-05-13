import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import OutLineButton from './OutLineButton'

const UserCard = ({ images, userId, name}) => {
  return (
    <View style={styles.followersCardContainer}>
    <Image source={{ uri: images }} style={styles.images} />
    <View style={styles.followersCard}>
        <Text>{userId}</Text>
        <Text>{name}</Text>
    </View>
    

</View>
  )
}

export default UserCard

const styles = StyleSheet.create({

    followersCardContainer: {
        flex: 1,
        flexDirection: 'row',
        width: Dimensions.get('window').width * 0.9,
        marginHorizontal:10
        // backgroundColor:'red',
        // justifyContent:'space-between'
    },

    followersCard: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 15
    },

    images: {
        width: 60,
        height: 60,
        marginVertical: 9,
        borderRadius: 50,
        zIndex: 0
    },


    text: {
        color: 'black',
        fontSize: 18,
        marginVertical: 2
    },

    buttonConainer: {
        alignSelf: 'center',
        height: 40,
        borderRadius: 5,
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
})