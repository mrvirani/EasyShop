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
import OnboardingScreen from '../components/UI/AuthSection/OnboardingScreen';
import Role from '../components/UI/AuthSection/Role';
import Language from '../components/UI/AuthSection/Language';
import Login from '../components/UI/AuthSection/Login';
import PhoneLogin from '../screens/Auth/PhoneLogin';
import Signup from '../screens/Auth/Signup';
import ForgetPassword from '../components/UI/ProfileSection/ForgetPassword';
import Otp from '../components/UI/AuthSection/Otp';
import Rewards from '../components/UI/AuthSection/Rewards';
import PrivacyAndPolicy from '../components/UI/ProfileSection/Others/PrivacyAndPolicy';
import TemsAndCondition from '../components/UI/ProfileSection/Others/TemsAndCondition';
import HelpsAndSupports from '../components/UI/ProfileSection/Others/HelpsAndSupports';
import FAQs from '../components/UI/ProfileSection/Others/FAQs';


import Icons from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from "react-native-vector-icons/Feather"
import OtpLogin from '../components/UI/AuthSection/OtpLogin';



import Icon from 'react-native-vector-icons/FontAwesome';
import AccountDetails from '../components/UI/ProfileSection/AccountDetails';
import ChangePassword from '../components/UI/ProfileSection/ChangePassword';
import Address from '../components/UI/ProfileSection/Address';
import AddCard from '../components/UI/Molecules/AddCard';
import PaymentCard from '../components/UI/ProfileSection/PaymentCard';
import PaymentMethods from '../components/UI/Molecules/PaymentMethods';
import CouponsList from '../components/UI/Molecules/CouponsList';
import Post from '../components/UI/ProfileSection/UsersContent/Post';
import Followers from '../components/UI/ProfileSection/UsersContent/Followers';
import Following from '../components/UI/ProfileSection/UsersContent/Following';
import FollowRequest from '../components/UI/ProfileSection/UsersContent/FollowRequest';
import RewardsHistory from '../components/UI/ProfileSection/RewardsHistory';
import PostHeader from '../components/UI/atoms/PostHeader';
import CreatePost from '../components/UI/ProfileSection/UsersContent/CreatePost';


const AuthNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='Role' >

        <Stack.Screen name='Role' component={Role} options={{ headerShown: false }} />
        <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />
        <Stack.Screen name='onBoard' component={OnboardingScreen} options={{ headerShown: false }}
        // options={{
        //   headerRight: () =>
        //     <Text style={{ paddingRight: 10, color: 'black', fontSize: 16 }}>Skip</Text>,
        //   headerTitle: ""
        // }}
        />
        <Stack.Screen name='Signup' component={Signup} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneLogin" component={PhoneLogin} options={{ headerShown: false }} />
        <Stack.Screen name="Otp" component={Otp} options={{ headerShown: false }} />
        <Stack.Screen name="OtpLogin" component={OtpLogin} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Rewards" component={Rewards} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />

        <Stack.Screen name="PaymentMethods" component={PaymentMethods} options={{ headerShown: false }} />


        {/* <Stack.Screen name="CustomerBottomTabNavigator" component={CustomerBottomTabNavigator} options={{ headerShown: false }} /> */}

      </Stack.Navigator>


    </NavigationContainer>


  )

}



const CustomerBottomTabNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (

    <NavigationContainer tabBarActiveIconColor='blue'>
      <StatusBar backgroundColor='white' barStyle='dark-content' />

      <Tab.Navigator initialRouteName='Profile' screenOptions={{
        // tabBarActiveBackgroundColor: 'pink',
        tabBarStyle: {
          height: 70,
          // position: 'absolute',
        },
        tabBarLabelStyle: { height: 20, fontSize: 13, lineHeight: 13 },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'black',
      }}>

        {/* <Tab.Screen name="Auth" component={AuthNavigator} options={{ headerShown: false, tabBarVisible: false }} /> */}
        <Tab.Screen name="Home" component={Home}
          options={{
            tabBarIcon: () =>
              <Icons name='home' color='#6D6D6D' size={25} />,
            headerShown: false,
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
        <Tab.Screen name="Profile" component={PageNavigator}
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


const PageNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName='AccountDetails'>

        <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentMethods" component={PaymentMethods} options={{ headerShown: false }} />
        <Stack.Screen name="PrivacyAndPolicy" component={PrivacyAndPolicy} options={{ headerShown: false }} />
        <Stack.Screen name="TemsAndCondition" component={TemsAndCondition} options={{ headerShown: false }} />
        <Stack.Screen name='HelpsAndSupports' component={HelpsAndSupports} options={{ headerShown: false }} />
        <Stack.Screen name='FAQs' component={FAQs} options={{ headerShown: false }} />
        <Stack.Screen name='AccountDetails' component={AccountDetails} options={{ headerShown: false }} />
        <Stack.Screen name='ChangePassword' component={ChangePassword} options={{ headerShown: false }} />
        <Stack.Screen name="ForgotPassword" component={ForgetPassword} options={{ headerShown: false }} />
        <Stack.Screen name="Address" component={Address} options={{ headerShown: false }} />
        <Stack.Screen name="AddCard" component={AddCard} options={{ headerShown: false }} />
        <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentCard" component={PaymentCard} options={{ headerShown: false }} />
        <Stack.Screen name="CouponsList" component={CouponsList} options={{ headerShown: false }} />
        <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
        <Stack.Screen name="Followers" component={Followers} options={{ headerShown: false }} />
        <Stack.Screen name="Following" component={Following} options={{ headerShown: false }} />
        <Stack.Screen name="FollowRequest" component={FollowRequest} options={{ headerShown: false }} />
        <Stack.Screen name="RewardsHistory" component={RewardsHistory} options={{ headerShown: false }} />
        <Stack.Screen name="PostHeader" component={PostHeader} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePost" component={CreatePost} options={{ headerShown: false }} />


      </Stack.Navigator>

    </NavigationContainer>

  )
}

// export default CustomerBottomTabNavigator
// export default AuthNavigator
export default PageNavigator