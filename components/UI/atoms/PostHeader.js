import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


import Entypo from 'react-native-vector-icons/Entypo'

const PostHeader = ({avterUrl, userName, date, }) => {
  return (
    <View style={styles.screen}>

        <View style={styles.mainContainer}>
            <View style={styles.avtarContainer}>

            <Image source={{uri:'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'}} style={styles.avtarImage} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.userName}>Peter Johnson</Text>
                <Text style={styles.date}>12/13/2024</Text>
            </View>
            <Entypo name="dots-three-horizontal" color="black" size={20} style={styles.icon} />
        </View>
      
    </View>
  )
}

export default PostHeader

const styles = StyleSheet.create({

    mainContainer:{
        flexDirection:'row',
        // marginHorizontal:15,
        marginVertical:10
    },
       avtarContainer:{
        width:50,
        height:50,
        borderRadius:50,
        overflow:'hidden'
    },
    avtarImage:{
        width:50,
        height:50,
        borderRadius:40
    },
    textContainer:{
        flex:1,
        alignSelf:'center',
        marginHorizontal:10,
    },
    icon:{
        marginRight:5,
        alignSelf:'center'
    },

    userName:{
        fontSize:18,
        color:'black'
    }
})