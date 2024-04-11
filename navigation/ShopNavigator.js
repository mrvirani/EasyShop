import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Home from '../screens/customers/Home';
import Orders from '../screens/customers/Orders';
import Explore from '../screens/customers/Explore';
import Feed from '../screens/customers/Feed';
import Profile from '../screens/customers/Profile';
import OnboardingScreen from '../screens/Onboard.js/OnboardingScreen';
import Role from '../components/UI/Role';
import Language from '../components/UI/Language';
import Login from '../screens/Auth/Login';
import PhoneLogin from '../screens/Auth/PhoneLogin';
import Signup from '../screens/Auth/Signup';
import ForgetPassword from '../components/UI/ForgetPassword';
import Otp from '../components/UI/Otp';
import Rewards from '../components/UI/Rewards';

import Icon from 'react-native-vector-icons/FontAwesome';

import Icons from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from "react-native-vector-icons/Feather"
import OtpLogin from '../components/UI/OtpLogin';


const AuthNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (

    <NavigationContainer>

      <Stack.Navigator>
        {/* 
        <Stack.Screen name='Role' component={Role} options={{ headerShown: false }} />
      <Stack.Screen name="Language" component={Language} />
      <Stack.Screen name='onBoard' component={OnboardingScreen}
        options={{
          headerRight: () =>
            <Text style={{ paddingRight: 10, color: 'black', fontSize: 16 }}>Skip</Text>,
          headerTitle: ""

        }}
      /> */}
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneLogin" component={PhoneLogin} />
        <Stack.Screen name="Otp" component={Otp} />
        <Stack.Screen name="OtpLogin" component={OtpLogin} />
        <Stack.Screen name="ForgotPassword" component={ForgetPassword} />
        <Stack.Screen name="Rewards" component={Rewards} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} />

      </Stack.Navigator>

    </NavigationContainer>


  )

}




const CustomerBottomTabNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (

    <NavigationContainer tabBarActiveIconColor='blue' options={{ headerShown: false }}>
      <StatusBar backgroundColor='white' barStyle={'black'} />

      <Tab.Navigator initialRouteName='Profile' screenOptions={{
        // tabBarActiveBackgroundColor: 'pink',
        tabBarStyle: {
          height: 70,
          position: 'absolute',
        },
        tabBarLabelStyle: { height: 20, fontSize: 13, lineHeight: 13 },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
      }}>

        <Tab.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false }} />
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: () =>
              <Icons name='home' color='#6D6D6D' size={25} />,
            headerShown: false
          }}
        />
        <Tab.Screen name="Orders" component={Orders}
          options={{
            tabBarIcon: () =>
              <Ionicons name='bag-check-outline' color='#6D6D6D' size={25} />,
            headerShown: false
          }}
        />
        <Tab.Screen name="Explore" component={Explore}
          options={{
            tabBarIcon: () =>
              <Ionicons name='rocket-outline' color='#6D6D6D' size={25} />,
            headerShown: false
          }} />
        <Tab.Screen name="Feed" component={Feed}
          options={{
            tabBarIcon: () =>
              <MaterialIcons name='newspaper-variant-outline' color='#6D6D6D' size={25} />,
            headerShown: false
          }}
        />
        <Tab.Screen name="Profile" component={Profile}
          headerRight={() =>
            <MaterialIcons name='logout' color='black' size={20} />
          }
          options={{
            tabBarIcon: () =>
              <Feather name='user' color='#6D6D6D' size={25} />,
            headerShown: false

          }}
        />
      </Tab.Navigator>
    </NavigationContainer>

  )


}


export default AuthNavigator