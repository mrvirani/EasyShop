import { Button, Image, StyleSheet, Text, TextInput, TouchableNativeFeedback, View, PermissionsAndroid, Pressable, ScrollView, Dimensions, RefreshControl, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'

import * as updateuserAction from "../../../utiles/localStorage/store/actions/Auth"
import * as showuserdetailsAction from "../../../utiles/localStorage/store/actions/Auth"


import PhoneInput from "react-native-phone-number-input";

import { launchImageLibrary } from 'react-native-image-picker';
import CustomeButton from '../atoms/CustomeButton';
import { useDispatch, useSelector } from 'react-redux';


import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';




const AccountDetails = (props) => {

    const [selectedImage, setSelectedImage] = useState('https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg')
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNo, setPhoneNo] = useState('')
    const [isEditable, setIsEditable] = useState(false)
    const [refreshing, setRefreshing] = useState(false);

    const dispatch = useDispatch()

    const navigation = useNavigation()

    const getUserData = useSelector(state => state.auth.userData)


    useEffect(() => {
        getUserDetails();

    }, [dispatch])

    const getUserDetails = () => {
        dispatch(showuserdetailsAction.getUserDetails())
            .then(() => {
                setFirstName(getUserData.data.userDetails.firstname);
                setLastName(getUserData.data.userDetails.lastname);
                setEmail(getUserData.data.userDetails.email);
                setPhoneNo(getUserData.data.userDetails.phoneno);
            })
            .catch(error => console.log('Error fetching user details:', error))
            .finally(() => setRefreshing(false));
    };

    const onRefresh = () => {
        setRefreshing(true);
        getUserDetails();
    };



    const saveHandler = (props) => {
        // let formdata = new FormData();

        console.log("Account details screen log for state data", firstName + "|" + lastName + "|" + email + "|" + phoneNo)


        // // formdata.append('image', selectedImage)
        // formdata.append('first_name', firstName)
        // formdata.append('last_name', lastName)
        // formdata.append('email', email)
        // formdata.append('phoneNo', phoneNo)

        {
            isEditable && dispatch(updateuserAction.updateuserDetails(firstName, lastName, email, phoneNo)).then((res) => {

                console.log("mali gayo data", res)
                if (res.status === 'success') {
                    Alert.alert(res.msg)
                } else {
                    Alert.alert(res.msg)
                }
            })
                .catch(err => Alert.alert("Users details not properly Updated!!"))
        }

        setIsEditable(!isEditable)

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
        <View style={StyleSheet.screen}>
            <View style={styles.header}>
                <MaterialIcons name='keyboard-backspace' color='black' size={25} style={styles.icon} onPress={() => navigation.goBack()} />
                <Text style={styles.headerTitle}>Account details</Text>
            </View>

            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                } >

                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <Pressable style={({ pressed }) => [
                            styles.imagePicker,
                            {
                                backgroundColor: pressed ? '#d1d1d1' : 'transparent', // Change background color when pressed
                                transform: [{ scale: pressed ? 0.95 : 1 }], // Apply scale effect when pressed
                            },
                        ]} onPress={OpencameraLib} >

                            <Image source={{ uri: selectedImage }} style={styles.profileImage} />
                        </Pressable>
                        <View style={styles.editImagesIconContainer}>
                            <MaterialIcons name='logout' color='white' size={20} style={styles.editIcons} onPress={() => { }} />
                        </View>
                    </View>


                    {/* <Button title="click button" onPress={OpencameraLib} /> */}

                    <Text style={styles.title}>First Name</Text>
                    <TextInput
                        style={styles.input}
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                        placeholder='e.g. Maulik'
                        editable={!isEditable ? false : true}
                    />

                    <Text style={styles.title}>Last Name</Text>
                    <TextInput
                        style={styles.input}
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                        placeholder='e.g. Virani'
                        editable={!isEditable ? false : true}
                    />

                    <Text style={styles.title}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder='e.g. xyz@gmail.com'
                        editable={!isEditable ? false : true}
                    />

                    <Text style={styles.title}>Phone Number</Text>


                    <PhoneInput
                        defaultCode='IN'
                        value={phoneNo}
                        onChangeText={(text) => setPhoneNo(text)}
                        editable={!isEditable ? false : true}
                        // onChangeFormattedText={(text) => {}}
                        withShadow
                        containerStyle={{
                            width: '100%',
                            height: 50,
                            borderRadius: 50,
                            marginBottom: 10,
                            borderColor: '#dbdbdb',
                            backgroundColor: '#F3F2F3',
                            borderWidth: 1,
                            borderColor: '#eae3e3',
                            elevation: 1000
                        }}
                        textContainerStyle={{ borderRadius: 50, backgroundColor: '#F3F2F3' }}
                        textInputStyle={{ color: 'black', padding: -40, marginTop: -10, marginBottom: -13 }}

                    />


                </View>
                <View style={styles.buttonContainer}>

                    <CustomeButton style={styles.saveBtn} onPress={saveHandler}>{!isEditable ? "Edit Details" : "Save"}</CustomeButton>
                </View>



            </ScrollView>


        </View>
    )
}

export default AccountDetails

const styles = StyleSheet.create({

    screen: {
        flex: 1,
        marginHorizontal: 16,

    },


    header: {
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        // backgroundColor: 'white',
        alignItems: 'center',
    },

    icon: {
        left: 10,
        lineHeight: 60
    },

    headerTitle: {
        flex: 1,
        lineHeight: 60,
        textAlign: 'center',
        fontSize: 20,
        color: 'black'
    },

    container: {
        flex: 1,
        alignIt: 'flex-end',
        padding: 20,
        marginHorizontal: 10, height: Dimensions.get('window').height * 0.82
    },

    imageContainer: {
        width: 110,
        height: 110,
        marginBottom: 10,
        marginTop: 10,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row'
    },

    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },

    editImagesIconContainer: {
        width: 35,
        height: 35,
        position: 'absolute',
        bottom: 6,
        alignSelf: 'flex-end',
        justifyContent: 'center',
        backgroundColor: '#FC2779',
        borderRadius: 50,
        elevation: 7,
        borderColor: '#FC2779'
    },

    editIcons: {
        justifyContent: 'center',
        alignSelf: 'center',
        left: 2,
        alignContent: 'center'
    },

    imagePicker: {
        width: 110,
        height: 110,
        borderWidth: 5,
        borderColor: 'white',
        alignItems: 'center',
        marginBottom: 20,
        alignSelf: 'center',
        borderRadius: 55,
        elevation: 3, // Add elevation for shadow effect
        overflow: 'hidden',
    },

    buttonContainer: {
        justifyContent: 'flex-end'
    },


    // imagePiker: {
    //     alignItems: 'center',
    //     marginBottom: 20,
    //     opacity:5
    // },

    input: {
        borderWidth: 1,
        borderColor: '#dbdbdb',
        // backgroundColor: 'white',
        borderRadius: 50,
        padding: 10,
        marginBottom: 10,
        paddingStart: 20,

    },

    title: {
        color: 'black',
        marginTop: 15,
        marginBottom: 6
    },



    saveBtn: {
        alignSelf: 'center',
        marginBottom: 20,
        padding: 15
    },
})

