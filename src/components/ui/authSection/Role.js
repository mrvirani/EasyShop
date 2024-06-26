import { Dimensions, Pressable, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomeButton from '../atoms/CustomeButton'

// import { COLORS } from '../../../screens/Onboard.js/OnboardingScreen'

const Role = (props) => {

    const { width, height } = Dimensions.get('window')

    const [role, setRole] = useState('Customer')
    const [passdata, setpassdata] = useState('1')

    const getButtonBackgroundColor = (currentButton) => {
        return role === currentButton
            ? currentButton === 'Customer' ? "#FB5193" : "#6A65F4"
            : "#e2dee2";
    }

    const SubmitHandler =()=>{

        const roleValue = role === 'Customer' ? '1' : '2';
    
        props.navigation.navigate('Language', { passdata: roleValue });

    
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ height: height * 0.50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                <TouchableOpacity style={{ width: width * 0.55, height: 150, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderColor: 'black',  marginVertical: 10, backgroundColor: getButtonBackgroundColor('Customer') }} onPress={() => setRole('Customer')}>
                    <Text style={{fontSize:18, color:'black'}}>Customer</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{ width: width * 0.55, height: 150, borderRadius: 20, justifyContent: 'center', alignItems: 'center', borderColor: 'black', marginVertical: 10, backgroundColor: getButtonBackgroundColor('Bussiness') }} onPress={() => setRole('Bussiness')}>
                    <Text style={{fontSize:18, color:'black'}}>Bussiness</Text>
                </TouchableOpacity>

                {/* {
                role === 'Customer' ? (<CustomeButton onPress={() => props.navigation.navigate('Language')} style={{ padding: 40, backgroundColor: getButtonBackgroundColor('Customer') }}>Continous as Customer</CustomeButton>) :
                    (<CustomeButton onPress={() => props.navigation.navigate('Language')} style={{ padding: 40, backgroundColor: getButtonBackgroundColor('Bussiness') }}>Continue as Business</CustomeButton>
                    )

            } */}



            </View>
            <View style={{ height: height * 0.13 }}>
                <CustomeButton
                    onPress={() =>SubmitHandler()}
                    style={{
                        padding: 18,
                        backgroundColor: role === 'Customer' ? "#FB5193" : "#6A65F4",
                        marginTop: 20,
                    }}>

                    {`Continue as ${role}`} {/* Dynamically change the button text based on the role */}
                </CustomeButton>

            </View>



        </View>
    )
}

export default Role

const styles = StyleSheet.create({
    
})