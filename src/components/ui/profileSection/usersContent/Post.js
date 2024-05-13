import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Image } from 'react-native'

import Pinchable from 'react-native-pinchable';
import PostHeader from '../../atoms/PostHeader';
import PostBottom from '../../atoms/PostBottom';
import PostContent from '../../atoms/PostContent';

const Post = (props) => {
    return (
        <View style={styles.screen}>
            <ScrollView >

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Post</Text>
                <MaterialIcons name='logout' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }} onPress={() => { }} />
            </View>

            <View style={styles.mainContainer}>

                <View>
                    <PostHeader />
                    <PostContent />
                    <PostBottom />


                    <PostHeader />
                    <PostContent />
                    <PostBottom />

                </View>

            </View>

            <View style={styles.addPostContainer}>
                <MaterialIcons name='create' color='white' size={25} style={styles.icons} onPress={() => props.navigation.navigate('CreatePost')} />
            </View>

            </ScrollView>
        </View>
    )
}

export default Post

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

    headerTitle: {
        flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, left: 25, color: 'black'
    },

    mainContainer: {
        flex: 1,
        marginHorizontal: 16
    },

    addPostContainer: {
        position: 'sticky',
        width: 60,
        height: 60,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: '#FB5193',
        bottom: 0,
        right: 32,
        marginBottom: 40,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        elevation: 2,

    },

    icons: {
        alignSelf: 'center',
        alignContent: 'center'
    }
})