import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Ionicons from 'react-native-vector-icons/Ionicons'


const HelpsAndSupports = () => {
    return (
        <View style={styles.screen}>
            <View style={styles.header}>

                <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, color: 'black', }}>Helps and Supports</Text>
            </View>

            <View>
                <Text style={{ fontSize: 18 }}>For further information or general help, {'\n'}Please Contact on:</Text>

                <View style={styles.container}>

                    <View style={styles.row}>
                        <View style={styles.iconBox}>
                            <Ionicons name='chatbox-ellipses-outline' color='black' size={22} style={{ lineHeight: 60, }} onPress={() => { }} />

                        </View>
                        <Text>Info@easyshop.com</Text>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.iconBox}>
                            <Ionicons name='chatbox-ellipses-outline' color='black' size={22} style={{ lineHeight: 60, }} onPress={() => { }} />
                        </View>
                        <Text>@easyshop</Text>
                    </View>


                    <View style={styles.row}>
                        <View style={styles.iconBox}>
                            <Ionicons name='chatbox-ellipses-outline' color='black' size={22} style={{ lineHeight: 60, }} onPress={() => { }} />
                        </View>
                        <Text>@easyshop</Text>
                    </View>
                </View>

            </View>



        </View>
    )
}

export default HelpsAndSupports

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        marginHorizontal: 16
    },


    header: {
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },

    container: {
        padding: 20,
    
    },

    row: {

        flexDirection: 'row',
        alignItems: 'center',
        marginTop:10
     

    },
    iconBox: {
        width: 60,
        backgroundColor: '#c9c3c3',
        alignItems: 'center',
        justifyContent: 'center',
        right: 10,
        borderRadius:10,

    },
    text: {
        start: 10
    }


})