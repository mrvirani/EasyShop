import { Dimensions, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'


import { launchImageLibrary } from 'react-native-image-picker';


// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Card from '../../components/UI/atoms/Card'

import { PROFILE_PAGE } from '../Onboard.js/data/dummydata'
import { createIconSetFromFontello } from 'react-native-vector-icons'
import { TouchableNativeFeedback } from 'react-native'

// import Feather from 'react-native-vector-icons/Feather'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

import { Divider } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window')

export default function Profile(props) {

  const [selectedImage, setSelectedImage] = useState('https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg')

  const navigation = useNavigation()


  const renderProfileItems = (itemdata) => {

    // console.log(itemdata.item.iconType)

    let Icon1;

    switch (itemdata.item.iconType) {
      case 'FontAwesome':
        Icon1 = FontAwesome;
        break;
      case 'MaterialIcons':
        Icon1 = MaterialIcons;
        break;
      case 'Feather':
        Icon1 = Feather;
         break;
        case 'MaterialCommunityIcons':
          Icon1 = MaterialCommunityIcons;  
        break;
        case 'FontAwesome5':
          Icon1 = FontAwesome5; 
        break;
        case 'Ionicons':
          Icon1 = Ionicons;
         break;
        case 'EvilIcons':
          Icon1 = EvilIcons;
             break;
      // Add cases for other icon libraries if needed
      default:
        Icon1 = null;
    }

    // console.log("data is", itemdata);

    

    return (
      <Pressable style={[styles.box, { backgroundColor: itemdata.item.boxColor }]} onPress={() => navigation.navigate(itemdata.item.navigationScreen)} >
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        {Icon1 &&  <Icon1 name={itemdata.item.iconName1} color='black' size={26} style={{ marginRight: 20, lineHeight: 60, top: -2, left: 12 }} />  }   
          <Ionicons name="arrow-forward-circle-outline" color={itemdata.item.iconColor} size={20} style={{ lineHeight: 60, right: 12, top: -10 }} />
        </View>
        <Text style={{ alignSelf: 'center', bottom: 8 }}>{itemdata.item.title}</Text>
      </Pressable>
    )
  }

  const OpencameraLib = async () => {


    try {
      const result = await launchImageLibrary({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.7
      });

      if (result?.assets && result?.assets.length > 0) {
        setSelectedImage(result.assets[0].uri);
        console.log(result.assets[0].uri);
        console.log("result====>", result);
      } else {
        console.log("No image selected");
      }
    } catch (error) {
      console.error("Error selecting image:", error);
    }
  }


  return (
    <View style={styles.screen}>
      <View style={styles.header}>

        <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, left: 25, color: 'black' }}>Profile</Text>

        <MaterialIcons name='logout' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }} onPress={() => { }} />

      </View>

      <ScrollView contentContainerStyle={{ paddingHorizontal: 5, paddingBottom: 30 }}>


        <View style={{ paddingHorizontal: 16 }}>

          <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
                {/* <Image source={require('../../images/Customerfeedback-pana.png')} style={{ width: 90, height: 90, borderRadius: 50, borderWidth: 5, borderColor: 'black', backgroundColor: '#d6baba' }} /> */}
                <Pressable style={({ pressed }) => [
                  styles.imagePicker,
                  {
                    backgroundColor: pressed ? '#d1d1d1' : 'transparent', // Change background color when pressed
                    transform: [{ scale: pressed ? 0.95 : 1 }], // Apply scale effect when pressed
                  },
                ]} onPress={OpencameraLib} >

                  <Image source={{ uri: selectedImage }} style={{ width: 100, height: 100, borderRadius: 50, }} />
                </Pressable>

                <View style={{ width: 35, height: 35, position: 'absolute', alignSelf: 'flex-end', justifyContent: 'center', backgroundColor: '#FC2779', borderRadius: 50, elevation: 5, borderColor: 'black' }}>
                  <MaterialIcons name='logout' color='white' size={20} style={{ justifyContent: 'center', alignSelf: 'center', left: 2, alignContent: 'center' }} onPress={() => { }} />
                </View>
              </View>

              <View style={styles.userImageConainer}>
                <Text style={{ fontSize: 25 }}>Peter Johnsan</Text>
                <Text>maulikVirani5050@gmail.com</Text>
              </View>

            </View>


            <View style={styles.followersContainer}>
              <Pressable onPress={() => props.navigation.navigate('Post')}>
                <Text style={{ fontSize: 18, color: 'white' }}>225</Text>
                <Text style={{ color: 'white' }}>Posts</Text>
              </Pressable>
              <View style={{width:1,height:'40%', borderColor:'white', borderWidth:1}}></View>
              <Pressable onPress={() => props.navigation.navigate('Followers')}>
                <Text style={{ fontSize: 18, color: 'white' }}> 320K</Text>
                <Text style={{ color: 'white' }}>Folowers</Text>
              </Pressable>
          <View style={{width:1,height:'40%', borderColor:'white', borderWidth:1}}></View>
              <Pressable onPress={() => props.navigation.navigate('Following')}>
                <Text style={{ fontSize: 18, color: 'white' }}>856K</Text>
                <Text style={{ color: 'white' }}>Following</Text>
              </Pressable>
            </View>


            <View style={styles.walletContainer}>
              <View style={{ textAlign: 'center', flexDirection: 'row' }}>

                <Image source={require('../../images/Customerfeedback-pana.png')} style={{ width: 50, height: 50, borderRadius: 50, borderColor: 'black', backgroundColor: '#d6baba' }} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={{ fontSize: 22 }}>$230</Text>
                  <Text>Wallet Balance</Text>
                </View>
              </View>

              <View style={{width:1,height:'50%', borderColor:'#dcd8cd', borderWidth:1}}></View>

              <View style={{ textAlign: 'center', flexDirection: 'row', }}>

                <Image source={require('../../images/Customerfeedback-pana.png')} style={{ width: 50, height: 50, borderRadius: 50, borderColor: 'black', alignItems: 'center', backgroundColor: '#d6baba' }} />
                <View style={{ marginLeft: 10, }}>
                  <Text style={{ fontSize: 22, }}>550</Text>
                  <Text>Rewards Point</Text>
                </View>
              </View>

            </View>

            <View style={{ paddingBottom: 10, }}>

              {/* <View style={{ backgroundColor: '#e2e2e2', width: 180, height: 80, marginTop: 40, borderRadius: 20, top: 3 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                <MaterialIcons name='logout' color='black' size={26} style={{ marginRight: 20, lineHeight: 60, top: -2, left: 12 }} onPress={() => { }} />
                <MaterialInewPasswordcons name='logout' color='black' size={15} style={{ lineHeight: 60, right: 12, top: -10 }} />
              </View>
              <Text style={{ alignSelf: 'center', bottom: 8 }}>Account Details</Text>
            </View> */}




              {/* {
              PROFILE_PAGE.map(({itemdata})=>{

                <View style={{ width: 180, height: 80, marginTop: 40, borderRadius: 20, top: 3}} color={itemdata.boxColor}>

                </View>
              })
            } */}

              <FlatList
                data={PROFILE_PAGE}
                numColumns={2}
                renderItem={renderProfileItems}
                style={{ top: 40, paddingBottom: 10 }}



              />







            </View>


          </View>



        </View>


      </ScrollView>



    </View>
  )
}

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

  userImageConainer: {
    flex: 1,
    paddingHorizontal: 15,
    justifyContent: 'center',
    borderRadius: 10,
    marginHorizontal: 6

  },

  imagePicker: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'white',
    alignItems: 'center',
    marginBottom: 5,
    alignSelf: 'center',
    borderRadius: 55,
    elevation: 3, // Add elevation for shadow effect
    overflow: 'hidden',
  },

  container: {
    flex: 1,
    marginTop: 10,
    // marginBottom:10

  },

  followersContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    textAlign: 'center',
    backgroundColor: '#FC2779',
    height: 70,
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: 6,
    top: 15,
    elevation: 5,
    borderColor: 'black',
    // borderWidth:1

  },

  walletContainer: {
    top: 30,
    height: 90,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginHorizontal: 6,
    justifyContent: 'space-around',
    elevation: 5,
    borderColor: 'black',
  },

  box: {
    width: (width - 80) / 2,
    marginHorizontal: 8,
    left:2,
    justifyContent: 'space-between',
    height: 80,
    marginTop: 10, marginBottom: 10,
    borderRadius: 20,
    elevation: 3,
    borderColor: 'black',

  },





})