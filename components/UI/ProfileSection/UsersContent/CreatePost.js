import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'

import TagInput from 'react-native-tags-input';

import { SelectList } from 'react-native-dropdown-select-list';
import CustomeButton from '../../atoms/CustomeButton';

import {  launchImageLibrary } from 'react-native-image-picker'


const CreatePost = () => {

    const [pickedImage, setPickedImages] = useState('https://i.pinimg.com/originals/14/cc/da/14ccdada3d78ab8ef70b7ce46aec47ef.jpg')
    const [title, setTitle] = useState('')

    const [descriptions, setDescriptions] = useState('')

    const [tags, setTags] = useState({tag:'', tagsArray:[]})
    // const [tagsColor, setTagsColor] = useState("#fb5193");
    const [tagsText, setTagsText] = useState('#fff');

    const updateTagState = (newState) => {
        setTags(newState);
      };

      
    const topic = [
        { key: '1', value: 'Fun & Entertainment'},
        { key: '2', value: 'Fun & Entertainment' },
        { key: '3', value: 'Fun & Entertainment' },
        // { key: '4', value: 'School', disabled: true },
        // { key: '5', value: 'College' },

    ]

    const OpencameraLib = async () => {


        console.log("presse start")
    
        const result = await launchImageLibrary({
          allowsEditing: true,
          aspect: [16, 9],
          quality: 0.7
        });
    
        setPickedImages(result?.assets[0]?.uri)
    
        console.log(result?.assets[0]?.uri)
        console.log("result====>", result)
    
      }
    



  return (
    <View style={styles.screen}>

<ScrollView>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Create Post</Text>
                <MaterialIcons name='logout' color='black' size={22} style={{ marginRight: 20, lineHeight: 60, }} onPress={() => { }} />
            </View>

            <View style={styles.container}>

      <Text style={styles.textTitle}>Photo</Text>

      <View style={styles.imageContainer}>

        <Pressable onPress={OpencameraLib}>
        <Image source={{uri: pickedImage}} style={styles.images}/>
        </Pressable>

        <View style={styles.iconCanselContainer}>
        <Entypo name='cross' color='white' size={18} style={styles.iconCanselImage} onPress={() => setPickedImages('https://i.pinimg.com/originals/14/cc/da/14ccdada3d78ab8ef70b7ce46aec47ef.jpg')} />
        </View>

      </View>

      <Text style={styles.textTitle}>Title</Text>

      <TextInput 
      style={styles.inputContainer}
      value={title}
      onChangeText={(text)=>setTitle(text)}

      />

      <Text style={styles.textTitle}>Description(Optional)</Text> 
      
      <TextInput
       multiline={true}
      numberOfLines={5}
value={descriptions}
onChangeText={(text)=>setDescriptions(text)}
style={[styles.inputContainer, styles.descriptionField]}
textAlignVertical="top"
      />

<Text style={styles.textTitle}>HasTags</Text> 

<TagInput
        updateState={updateTagState}
        tags={tags}
        placeholder="Hashtag"
        // label="Press comma & space to add a tag"
        labelStyle={{ color: 'black', fontSize:16 }}

        // leftElementContainerStyle={{ marginLeft: 3 }}
        rightElement={
            <View><Text style={styles.goText}>GO</Text></View>
        }
        containerStyle={styles.tagContainerStyle}
        inputContainerStyle={[styles.textInput]}
        inputStyle={{ color: tagsText }}
        onFocus={() => {
          setTagsText("black");
        }}
        onBlur={() => {
          setTagsText('white');
        }}
        autoCorrect={false}
        tagStyle={styles.tag}
        tagTextStyle={styles.tagText}
        deleteIconStyles={styles.deleteIconStyles}
        keysForTag={', '}
      />

      <Text  style={styles.textTitle}>Select Topics</Text>

                    <SelectList
                        setSelected={(val) => setSelected(val)}
                        data={topic}
                        save="value"
                        placeholder='Fun & Entertainment'
                        boxStyles={styles.boxStyles}
                    />





     


            </View>

            <CustomeButton style={styles.button}> Post</CustomeButton>

            </ScrollView>

    </View>
  )
}

export default CreatePost

const styles = StyleSheet.create({

    screen:{
        flex:1
    },

    header: {
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        marginBottom:10
    },

    headerTitle:{
         flex: 1, 
         lineHeight: 60, 
         textAlign: 'center', 
         fontSize: 20, 
         left: 25, 
         color: 'black' 
    },

    container:{
        marginHorizontal:16
    },

    textTitle:{
color:'black',
fontSize:16,
 marginHorizontal:10,
 marginTop:10
    },

    
    imageContainer:{
        width:'95%',
        height:'170',
        marginHorizontal:10,
        marginVertical:15,
        overflow:'hidden',
    },

    images:{
        height:170,
        borderRadius:20,
    },

    iconCanselContainer:{
        width:30,
        height:30,
        borderRadius:50,
        backgroundColor:'red',
        position:'absolute',
        alignSelf:'flex-end',
        alignItems:'center',
        justifyContent:'center',
        right:15,
        top:15
    },

    // iconCanselImage:{
    //     // position:'absolute',
    //     alignSelf:'flex-end',
    //     right:20,
    //     top:20
    // },

    inputContainer:{
        borderColor:'black',
        borderWidth:1,
        borderRadius:50,
        marginVertical:9,
        marginHorizontal:10,
        paddingLeft:20
    },

    descriptionField:{
        borderRadius:10
    },

    textInput: {
        height: 40,
        borderBottomWidth: 1,
        marginTop: 8,
        borderRadius: 5,
        padding: 3,
      },

      tagContainerStyle:{
        width: Dimensions.get('window').width - 50,
        height:Dimensions.get('window').height * 0.18,
        marginHorizontal:10,
        borderRadius:15,
        borderWidth:1,
        marginBottom:12,
        marginTop:5,
        overflow:'hidden'
      },

      tag: {
        backgroundColor: '#fb5193',
        height:35,
        borderRadius:50,
        color:'white'
      },

      tagText:{
            color:'white',
            fontSize:16
      },

      deleteIconStyles:{
            tintColor:'white'
      },
      
      boxStyles:{
        marginTop:10,
        borderRadius: 50, 
        marginBottom:15

      },

      goText:{
        color:'#fb5193', 
        fontSize:22,
        bottom:4

      },

      button:{
        padding:15,
        alignSelf:'center'
      }

})