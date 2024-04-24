import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const AllAddress = () => {
    return (
        <View >
           

            <View style={styles.container}>

                <Text style={styles.title}> Shipping Address</Text>
                <View style={styles.row}>

                    <View style={styles.imageContainer}>

                        <Image source={require('../../images/home_11769778.png')} style={styles.titleImage} />
                    </View>
                    <View style={styles.AddressTitleContainer}>
                        <Text>Home</Text>
                        <Text>Near Williamson Street, San Francisco.</Text>
                    </View>
                    <Image />
                </View>

                <View style={styles.row}>

                    <View style={styles.imageContainer}>

                        <Image source={require('../../images/home_11769778.png')} style={styles.titleImage} />
                    </View>
                    <View style={styles.AddressTitleContainer}>
                        <Text>Office</Text>
                        <Text>Near Williamson Street, San Francisco.</Text>
                    </View>
                    <Image />
                </View>

                <View style={styles.row}>

                    <View style={styles.imageContainer}>

                        <Image source={require('../../images/home_11769778.png')} style={styles.titleImage} />
                    </View>
                    <View style={styles.AddressTitleContainer}>
                        <Text>Other</Text>
                        <Text>Near Williamson Street, San Francisco.</Text>
                    </View>
                    <Image />
                </View>
            </View>
        </View>
    )
}

export default AllAddress

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        marginHorizontal: 20,
    },


    header: {
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },

    container: {
        marginHorizontal: 15
    },


    title: {
        color: 'black',
        marginTop:10,
    },

    titleImage: {
        width: 20, height: 20, padding: 10, alignSelf: 'center'
    },

    row: {
        marginHorizontal: 20,
        marginVertical: 15,
        marginTop: 20,
        flexDirection: 'row',
    },

    imageContainer: {
        // backgroundColor: 'red',
        padding: 15,
        width: 45,
        height: 45,
        justifyContent: 'center',
        borderRadius: 50,
        borderWidth: 2,


    },

    AddressTitleContainer: {
        marginHorizontal: 10

    }



})