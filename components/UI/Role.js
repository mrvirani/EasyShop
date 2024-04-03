import { Dimensions, Pressable, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomeButton from '../CustomeButton'

import { COLORS } from '../../screens/Onboard.js/OnboardingScreen'

const Role = (props) => {

    const { width, height } = Dimensions.get('window')

    const [role, setRole] = useState('Customer')

    const getButtonBackgroundColor = (currentButton) => {
        return role === currentButton
            ? currentButton === 'Customer' ? "#FB5193" : "#6A65F4"
            : "#efe8e8";
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: height * 0.50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <TouchableOpacity style={{ width: width * 0.55, height: 150, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1, marginVertical: 10, backgroundColor: getButtonBackgroundColor('Customer') }} onPress={() => setRole('Customer')}>
                    <Text>Customer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: width * 0.55, height: 150, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 1, marginVertical: 10, backgroundColor: getButtonBackgroundColor('Bussiness') }} onPress={() => setRole('Bussiness')}>
                    <Text>Bussiness</Text>
                </TouchableOpacity>

                {/* {
                role === 'Customer' ? (<CustomeButton onPress={() => props.navigation.navigate('Language')} style={{ padding: 40, backgroundColor: getButtonBackgroundColor('Customer') }}>Continous as Customer</CustomeButton>) :
                    (<CustomeButton onPress={() => props.navigation.navigate('Language')} style={{ padding: 40, backgroundColor: getButtonBackgroundColor('Bussiness') }}>Continue as Business</CustomeButton>
                    )

            } */}



            </View>
            <View style={{ height: height * 0.13 }}>
                <CustomeButton
                    onPress={() => props.navigation.navigate('language')}
                    style={{
                        padding: 18,
                        backgroundColor: role === 'Customer' ? "#FB5193" : "#6A65F4",
                        marginTop: 20,
                    }}
                >
                    {`Continue as ${role}`} {/* Dynamically change the button text based on the role */}
                </CustomeButton>

            </View>



        </View>
    )
}

export default Role

const styles = StyleSheet.create({})