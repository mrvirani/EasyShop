import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomeButton from '../atoms/CustomeButton'


import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { REWARDSHISTORY } from '../../../screens/Onboard.js/data/dummydata'


const RewardsHistory = (props) => {

    const renderRewardsHistory =(itemdata,index) =>{
        return(
            <View style={styles.boxContainer}>
            <View style={styles.textBox}>
            <Text style={styles.points}>{itemdata.item.points} Points</Text>
            <Text>25/12//2022</Text>

            </View>
            <Text style={styles.details}>{itemdata.item.descriptions}</Text>

            <View style={[styles.border, index === REWARDSHISTORY.length - 1 ? { borderWidth: 0 } : { borderWidth: 1 }]}></View>
    
        </View>
        )
    }

    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={styles.header}>
                    <Text style={styles.headerText}>My Rewards</Text>
                    <MaterialIcons name='logout' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }} onPress={() => { }} />
                </View>

                <View style={styles.mainContainer}>

                    <View style={styles.container}>
                    <View style={styles.imageContainer}>    
                    <Image source={require('../../../images/rewards.png')}  style={styles.image}/>

                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.RewardsPoint}>550</Text>
                        <Text>Rewards Points</Text>
                    </View>
                    <CustomeButton style={styles.button}>Use Points</CustomeButton>
                    
                    </View>
                <Text style={styles.text}>Point History</Text>
                </View>

               <FlatList 
               data={REWARDSHISTORY}
               renderItem={renderRewardsHistory} />

                
            </ScrollView>
        </View>

    )
}

export default RewardsHistory

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

    headerText:{
         flex: 1,
          lineHeight: 60,
          textAlign: 'center',
          fontSize: 20,
          left: 25, 
         color: 'black' 
    },

    border:{
borderColor:'black',
width:'100%',
height:0.5,
// borderWidth:0.5,
marginTop:12,
alignSelf:'center'

    },

    mainContainer:{
        marginHorizontal:20,
    },

    container:{
       
        flexDirection:'row',
        padding:10,
        marginTop:10,
        borderColor:'black',
        alignItems:'center',
        elevation:3
    },

    imageContainer:{
        height:45,
        width:45,
        // borderWidth:1,
        borderRadius:50,
        // borderColor:'black',
        alignItems:'center',
        overflow:'hidden',
        justifyContent:'center',
        backgroundColor:'#FEE7ED',
        borderWidth:1
    },

    image:{
        height:30,
        width:30,
        // borderRadius:'50%'
    },

    textContainer:{
flex:1,
marginLeft:15
    },

    RewardsPoint:{
        color:'black',
fontSize:20,
// fontFamily:'bold'
    },

    button:{
        width:'90%'
    },

    text:{
color:'black',
marginTop:10,
fontSize:19,

    },

    textBox:{
        flexDirection:'row',
       marginTop:10
    },
    points:{
        flex:1,
        fontSize:20,
        color:'black',
        // marginTop:10
        //  marginLeft:10,
    },

    boxContainer:{
        marginHorizontal:20,  
    },

    details:{
        marginTop:5,

    }



})