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

export default function ShopNavigator() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>

      <StatusBar backgroundColor='white' barStyle={'black'} />


      <Stack.Navigator>

        <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
        <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name='Role' component={Role} options={{headerShown:false}} />
        <Stack.Screen name="language" component={language} />
        <Stack.Screen name='onBoard' component={OnboardingScreen} />
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