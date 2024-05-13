import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'


import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomeButton from '../atoms/CustomeButton'


const ChangePassword = () => {

    const [showCurrentPassword, setShowCurrentPassword] = useState(false)
    const [showNewPassword, setShowNewPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const [currentPassword, setCurrentPass] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    console.log(currentPassword)
    console.log(newPassword)
    console.log(confirmPassword)


    const handlePasswordChange = () => {
        if (newPassword !== confirmPassword) {
            Alert.alert('Passwords do not match', 'Please make sure the new password and confirm password fields match.')
            return
        }
        // Handle password change logic here
    }

    return (
        <View style={styles.screen}>
            <View style={styles.header}>
                <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, color: 'black', }}>Change Password</Text>
            </View>

            <View style={styles.container}>



                <Text style={styles.title}>Current Password</Text>
                <View style={styles.row}>
                    <TextInput
                        onChangeText={(text) => setCurrentPass(text)}
                        placeholder=''
                        secureTextEntry={!showCurrentPassword}
                        // value={currentPassword}
                        style={{ flex: 1, paddingTop: 10, paddingRight: 10, paddingLeft: 20 }}
                    />

                    <MaterialCommunityIcons name={showCurrentPassword ? "eye" : 'eye-off'} color='black' size={16} style={{ marginRight: 20 }} onPress={() => setShowCurrentPassword(!showCurrentPassword)} />

                </View>


                <Text style={styles.title}>New Password</Text>
                <View style={styles.row}>
                    <TextInput
                        onChangeText={(text) => setNewPassword(text)}
                        placeholder=''
                        secureTextEntry={!showNewPassword}
                        // value={newPassword}
                        style={{ flex: 1, paddingTop: 10, paddingRight: 10, paddingLeft: 20 }}
                    />


                    <MaterialCommunityIcons name={showNewPassword ? "eye" : 'eye-off'} color='black' size={16} style={{ marginRight: 20 }} onPress={() => setShowNewPassword(!showNewPassword)} />


                </View>


                <Text style={styles.title}>Confirm Password</Text>
                <View style={styles.row}>
                    <TextInput
                        onChangeText={(text) => setConfirmPassword(text)}
                        placeholder=''
                        secureTextEntry={!showConfirmPassword}
                        value={confirmPassword}
                        style={{ flex: 1, paddingTop: 10, paddingRight: 10, paddingLeft: 20 }}
                    />

                    <MaterialCommunityIcons name={showConfirmPassword ? "eye" : 'eye-off'} color='black' size={16} style={{ marginRight: 20 }} onPress={() => setShowConfirmPassword(!showConfirmPassword)} />


                </View>



            </View>

            <View style={styles.saveButton}>
                <CustomeButton style={{ padding: 15, alignSelf: 'center', marginBottom: 25 }}>Save</CustomeButton>

            </View>
        </View>
    )
}

export default ChangePassword

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginHorizontal: 16
    },


    header: {
        height: 60,
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
    },

    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        marginBottom: 15
    },

    title: {
        marginTop: 25,
        marginBottom: 2,
        color: 'black'
    },

    row: {
        // flex:1,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: '#d1d1d1',
        borderRadius: 50,   // marginTop:5
        borderColor: 'black',
        borderWidth: 1
    },

    saveButton: {
        // flex:1,
        // justifyContent:'flex-end',
        // alignSelf:'flex-end'
        alignSelf: 'stretch', // stretch button horizontally
        marginTop: 15 // top margin
    }

})