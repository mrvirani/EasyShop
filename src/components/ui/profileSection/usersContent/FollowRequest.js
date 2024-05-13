import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import UserCard from '../../atoms/UserCard'


import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { FOLLOWERSLIST } from '../../../../dummyDataSet/dummydata'
import OutLineButton from '../../atoms/OutLineButton'


const FollowRequest = (props) => {


    const renderFollowRequestList = (itemData) => {
        return <View style={styles.followingListcard}>
            <UserCard userId={itemData.item.userId} name={itemData.item.name} images={itemData.item.images} />
            <OutLineButton style={styles.followingButton}>Accept</OutLineButton>
            <AntDesign name="close" color='black' size={22} style={styles.crossIcon} />

        </View>

    }


    return (
        <View style={styles.screen}>

            <ScrollView >
            <View style={styles.header}>

                <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, left: 25, color: 'black' }}>Following</Text>

                <MaterialIcons name='logout' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }} onPress={() => { }} />

            </View>

<View style={styles.mainContainer}>
            <FlatList
                data={FOLLOWERSLIST}
                renderItem={renderFollowRequestList}
                showsVerticalScrollIndicator={false}
            
            />
    
    </View>            


            </ScrollView>
        </View>
    )
}

export default FollowRequest

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

    mainContainer:{
        marginVertical:8
    },

    followingListcard: {
        flexDirection: 'row',
        marginHorizontal: 15,
    },
    followingButton: {
        color: '#fb5193',
        fontWeight:'bold'
    },
    crossIcon:{
        alignSelf:'center',
        marginRight:8,
        marginLeft:5
    }
})