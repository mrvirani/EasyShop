import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/customers/Home';
import Orders from '../screens/customers/Orders';
import Explore from '../screens/customers/Explore';
import Feed from '../screens/customers/Feed';
import Profile from '../screens/customers/Profile';
import OnboardingScreen from '../screens/Onboard.js/OnboardingScreen';
import Role from '../components/UI/Role';
import language from '../components/UI/language';
import Login from '../screens/Auth/Login';
import PhoneLogin from '../screens/Auth/PhoneLogin';
import Signup from '../screens/Auth/Signup';
import ForgetPassword from '../components/UI/ForgetPassword';
import Otp from '../components/UI/Otp';
import Rewards from '../components/UI/Rewards';


import Icon from 'react-native-vector-icons/FontAwesome'

export default function ShopNavigator() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>

      <StatusBar backgroundColor='white' barStyle={'black'} />


      <Stack.Navigator>
        
        <Stack.Screen name='Role' component={Role} options={{headerShown:false}} />
        <Stack.Screen name="language" component={language} />
        <Stack.Screen name='onBoard' component={OnboardingScreen}  
          options={{
            headerRight:()=>
                 <Text style={{paddingRight:10, color:'black', fontSize:16}}>Skip</Text>,
            headerTitle:""
            
          }}
        />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
        <Stack.Screen name="Rewards" component={Rewards}  options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Explore" component={Explore} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})