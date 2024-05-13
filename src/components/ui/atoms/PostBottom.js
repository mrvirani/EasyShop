import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Image } from 'react-native'


const PostBottom = () => {

    const [isLike, setIsLike] = useState(false)
    const [showDetails, setShowDetails] = useState(false)

    return (
        <View style={styles.conatiner}>
            <View style={styles.noOfLikes}>
                <AntDesign name="heart" color='red' size={18} onPress={() => setIsLike(!isLike)} />
                <Text style={styles.noOfLikestext}>Albert and 125 Others</Text>
                <Text>25 comments</Text>
            </View>
            <View style={styles.divider}></View>

            <View style={styles.row}>
                <AntDesign name={isLike ? 'heart' : 'hearto'} color={isLike ? 'red' : 'black'} size={22} style={{ paddingRight: 5, lineHeight: 60, }} onPress={() => setIsLike(!isLike)} />
                <Ionicons name='chatbubble-outline' color='black' size={22} style={{ lineHeight: 60, }} onPress={() => setShowDetails(!showDetails)} />
                <MaterialCommunityIcons name='share' color='black' size={28} style={{ lineHeight: 60, }} onPress={() => { }} />
            </View>

            <View style={styles.divider}></View>

            {
                showDetails && <View style={styles.comments}>
                    <View style={styles.avtarContainer}>

                        <Image source={{ uri: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' }} style={styles.avtarImage} />

                    </View>
                    <View style={styles.commentTextContainer}>

                        <Text style={styles.dummyComments}>hello this one is dummy comments, hello this one is dummy commentshello this one is dummy comments  </Text>
                    </View>
                </View>
            }

        </View>
    )
}

export default PostBottom

const styles = StyleSheet.create({


    noOfLikes: {
        marginTop: 5,
        flexDirection: 'row',
        marginBottom: 5
    },

    noOfLikestext: {
        flex: 1,
        marginLeft: 10
    },

    divider: {
        width: '100%',
        // height:1,
        borderColor: '#c9c9c9',
        borderWidth: 1
    },

    row: {
        flexDirection: 'row',
        width: '30%',
        justifyContent: 'space-between',
    },

    comments: {
        width: "100%",
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        // backgroundColor:"red"
    },

    avtarContainer: {
        width: 30,
        height: 30,
        borderRadius: 50,
        overflow: 'hidden',
        backgroundColor: 'red'
    },
    avtarImage: {
        width: 30,
        height: 30,
        borderRadius: 40
    },

    commentTextContainer: {
        width: '90%',
        marginHorizontal: 10,
        backgroundColor: '#c9c9c9',
        padding: 15,
        marginRight: 10,
        borderRadius: 20,
        overflow: 'hidden'
    },

    dummyComments: {
        lineHeight: 20,
        textAlign: 'justify',
        marginRight: 10
    }
})