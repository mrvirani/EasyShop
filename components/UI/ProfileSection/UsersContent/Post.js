import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { Image } from 'react-native'

import Pinchable from 'react-native-pinchable';
import PostHeader from '../../atoms/PostHeader';
import PostBottom from '../../atoms/PostBottom';

const Post = (props) => {
    return (
        <View style={styles.screen}>
            {/* <ScrollView stickyHeaderIndices={[1]}> */}

            <View style={styles.header}>
                <Text style={styles.headerTitle}>Post</Text>
                <MaterialIcons name='logout' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }} onPress={() => { }} />
            </View>

            <View style={styles.mainContainer}>

                <PostHeader />

                <View style={styles.postContainer}>
                    <View style={styles.imageContainer}>
                    <Pinchable> 
                        <Image source={{uri:'https://i.pinimg.com/originals/14/cc/da/14ccdada3d78ab8ef70b7ce46aec47ef.jpg'}} style={styles.postImages} /> 
                        </Pinchable>
                    </View>

                    <Text style={styles.description}>Hello this one Dumy text Hello this one Dumy text Hello this one Dumy text Hello this one Dumy text Hello this one Dumy text</Text>

                </View>

                <PostBottom />

                <PostHeader />

                <View style={styles.postContainer}>
                    <View style={styles.imageContainer}>
                    <Pinchable> 
                        <Image source={{uri:'https://i.pinimg.com/originals/14/cc/da/14ccdada3d78ab8ef70b7ce46aec47ef.jpg'}} style={styles.postImages} /> 
                        </Pinchable>
                    </View>

                    <Text style={styles.description}>Hello this one Dumy text Hello this one Dumy text Hello this one Dumy text Hello this one Dumy text Hello this one Dumy text</Text>

                </View>

                <PostBottom />

                

            </View>

            <View style={styles.addPostContainer}>
            <MaterialIcons name='create' color='white' size={25}  style={styles.icons} onPress={() => props.navigation.navigate('CreatePost')} />
            </View>

            {/* </ScrollView> */}
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

    headerTitle:{
         flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, left: 25, color: 'black' 
    },

    mainContainer:{
        flex:1,
        marginHorizontal:16
    },

    postContainer:{
        height:'40%',
        overflow:'hidden',
        // marginVertical:8,
        // backgroundColor:'green',
    },

    imageContainer:{
        height:'90%',
        overflow:'hidden',
    },

    postImages:{
        height:240,
        borderRadius:10
        
    },

    description:{
        color:'black',
        fontSize:16,
        top:-35,
        lineHeight:20
    },

    addPostContainer:{
        position:'absolute',
        width:60,
        height:60,
        borderRadius:50,
        overflow:'hidden',
        backgroundColor:'#FB5193',
        bottom:0,
        right: 32,
        marginBottom:40,
        alignSelf:'flex-end',
        justifyContent:'center',
        elevation: 2,
        
    },

    // scrollViewContent: {
    //     flexGrow: 1, // Ensure content can scroll properly
    // },

    icons:{
        alignSelf:'center',
        alignContent:'center'
    }
})