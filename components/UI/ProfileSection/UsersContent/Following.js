import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { FOLLOWERSLIST } from '../../../../screens/Onboard.js/data/dummydata'
import UserCard from '../../atoms/UserCard'
import OutLineButton from '../../atoms/OutLineButton'

const Following = (props) => {


    const renderFollowingList =(itemData) =>{
        return <View style={styles.followingListcard}>
            <UserCard  userId={itemData.item.userId} name={itemData.item.name} images={itemData.item.images} />
            <OutLineButton style={styles.followingButton}>Following</OutLineButton>

        </View> 
        
    }


    return (
        <View style={styles.screen}>

            <ScrollView>
            <View style={styles.header}>

                <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, left: 25, color: 'black' }}>Following</Text>

                <MaterialIcons name='logout' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }} onPress={() => { }} />

            </View>

            <View style={styles.mainContainer}>

            <FlatList
            data={FOLLOWERSLIST}
            renderItem={renderFollowingList}
            showsVerticalScrollIndicator={false}
            />
            </View>

            </ScrollView>
        </View>
    )
}

export default Following

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

    followingListcard:{
        flexDirection:'row',
        marginHorizontal: 15,
    },
    followingButton:{
       backgroundColor:'#fb5193',
       borderWidth:0,
       color:'white'
    }
})