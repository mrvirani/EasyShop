import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Pinchable from 'react-native-pinchable';
import { Image } from 'react-native';

const PostContent = () => {
    return (
        <View style={styles.container}>
            <View style={styles.postContainer}>
                <View style={styles.imageContainer}>
                    <Pinchable>
                        <Image source={{ uri: 'https://i.pinimg.com/originals/14/cc/da/14ccdada3d78ab8ef70b7ce46aec47ef.jpg' }} style={styles.postImages} />
                    </Pinchable>
                </View>
            </View>
            <Text style={styles.description}>Hello this one Dumy text Hello this one Dumy text Hello this one Dumy text Hello this one Dumy text Hello this one Dumy text</Text>
        </View>
    )
}

export default PostContent

const styles = StyleSheet.create({

    container: {
        height: 300,
        marginVertical:5
        // backgroundColor:'red'
    },

    postContainer: {
        // height: '28%',
        overflow: 'hidden',
        justifyContent:'center',
        // marginVertical:8,
        // backgroundColor: 'green',
    },

    imageContainer: {
        // height: '90%',
        overflow: 'hidden',
    },

    postImages: {
        height: 230,
        borderRadius: 10

    },

    description: {
        color: 'black',
        fontSize: 16,
        marginVertical:12,
        // top: -40,
        lineHeight: 20
    },
})