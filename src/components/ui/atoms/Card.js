import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'



import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const {width, height} = Dimensions.get('window')


const Card = ({ iconName1, iconSize1, iconColor1, iconName2, iconSize2, iconColor2, title, cardColor, textColor }) => {


    return (


        <View style={{ backgroundColor: cardColor, width: width*0.4, justifyContent:'space-between', height: 80, marginTop: 40, borderRadius: 20, top: 3 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                <MaterialIcons name={iconName1} color={iconColor1} size={iconSize1} style={{ marginRight: 20, lineHeight: 60, top: -2, left: 12 }} />
                <MaterialIcons name={iconName2} color={iconColor2} size={iconSize2} style={{ lineHeight: 60, right: 12, top: -10 }} />
            </View>
            <Text style={{ alignSelf: 'center', bottom: 8, color: textColor }}>{title}</Text>
        </View>

    )
}

export default Card

const styles = StyleSheet.create({



})