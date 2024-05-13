import { Dimensions, FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import { FOLLOWERSLIST } from '../../../../dummyDataSet/dummydata'
import UserCard from '../../atoms/UserCard'
import OutLineButton from '../../atoms/OutLineButton'

const Followers = (props) => {


    const renderFollowerslist = (itemData) => {

        console.log("renderFollowerslist", itemData)


        return <View style={styles.followingListcard}>
            <UserCard userId={itemData.item.userId} name={itemData.item.name} images={itemData.item.images} />
            <OutLineButton>Remove</OutLineButton>

        </View>
    }


    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={styles.header}>

                    <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, left: 25, color: 'black' }}>Followers</Text>

                    <MaterialIcons name='logout' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }} onPress={() => { }} />

                </View>

                <View style={styles.mainContainer}>
                    <View style={styles.followRequestContainer}>
                        <Text style={styles.text}>Follow Request</Text>
                        <Text>Approve or ignore Request</Text>
                        <View style={styles.imageContainer}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image source={{ uri: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' }} style={styles.images} />
                                <Image source={{ uri: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' }} style={[styles.images, styles.images1]} />
                                <Image source={{ uri: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' }} style={[styles.images, styles.images1, styles.images2]} />
                                <Image source={{ uri: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' }} style={[styles.images, styles.images2, styles.images3]} />
                                <Image source={{ uri: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' }} style={[styles.images, styles.images4]} />
                                <View style={[styles.images, styles.lastCard]}><Text style={styles.innerCardText}>+5</Text></View>
                            </View>
                            <MaterialIcons name="keyboard-arrow-right" color='black' size={30} style={styles.icon} onPress={() => { props.navigation.navigate('FollowRequest') }} />
                        </View>
                    </View>




                </View>

                <FlatList
                    data={FOLLOWERSLIST}
                    renderItem={renderFollowerslist}
                    showsVerticalScrollIndicator={false}
                />

            </ScrollView>
        </View>
    )
}

export default Followers

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

    mainContainer: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 16,
        marginVertical:5
    },

    followRequestContainer: {
        width: Dimensions.get('window').width * 0.9,
        height: Dimensions.get('window').height * 0.168,
        marginTop: 10,
        paddingLeft: 20,
        elevation: 3,
        // borderColor:'black',
        borderRadius: 2,
        // borderWidth:1,
        padding: 16
    },

    imageContainer: {
        flexDirection: "row",
        justifyContent: 'space-between',
        // backgroundColor:'red'
    },

    images: {
        width: 60,
        height: 60,
        marginVertical: 9,
        borderRadius: 50,
        zIndex: 0
    },

    images1: {

        position: 'absolute',
        left: 30,
        zIndex: 1,
    },

    images2: {

        left: 60,
        zIndex: 1,

    },

    images3: {

        left: 30,
        zIndex: 1,

    },

    images4: {

        // left:10,
        zIndex: 1,

    },

    lastCard: {
        left: -30,
        zIndex: 1,
        backgroundColor: '#FB5193',
        justifyContent: 'center'

    },

    innerCardText: {
        alignSelf: 'center',
        color: 'white',
        fontSize: 18
    },

    icon: {
        alignSelf: 'center'
    },

    followingListcard: {
        marginHorizontal:15,
        flexDirection: 'row'
    },



    text: {
        color: 'black',
        fontSize: 18,
        marginVertical: 2
    },

    // buttonConainer: {
    //     alignSelf: 'center',
    //     height: 40,
    //     borderRadius: 5,
    //     borderColor: 'black',
    //     borderWidth: 1,
    //     padding: 10
    // }

})