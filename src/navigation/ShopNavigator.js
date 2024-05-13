import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Icons from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from "react-native-vector-icons/Feather"

import Home from '../screens/customers/Home';
import Orders from '../screens/customers/Orders';
import Explore from '../screens/customers/Explore';
import Feed from '../screens/customers/Feed';
import Profile from '../screens/customers/Profile';
import OnboardingScreen from '../components/ui/authSection/OnboardingScreen';
import Role from '../components/ui/authSection/Role';
import Language from '../components/ui/authSection/Language';
import Login from '../components/ui/authSection/Login';
import PhoneLogin from '../screens/auth/PhoneLogin';
import Signup from '../screens/auth/Signup';
import ForgetPassword from '../components/ui/profileSection/ForgetPassword';
import Otp from '../components/ui/authSection/Otp';
import Rewards from '../components/ui/authSection/Rewards';
import PrivacyAndPolicy from '../components/ui/profileSection/othersScreens/PrivacyAndPolicy';
import TemsAndCondition from '../components/ui/profileSection/othersScreens/TemsAndCondition';
import HelpsAndSupports from '../components/ui/profileSection/othersScreens/HelpsAndSupports';
import FAQs from '../components/ui/profileSection/othersScreens/FAQs';

import OtpLogin from '../components/ui/authSection/OtpLogin';
import Icon from 'react-native-vector-icons/FontAwesome';
import AccountDetails from '../components/ui/profileSection/AccountDetails';
import ChangePassword from '../components/ui/profileSection/ChangePassword';
import Address from '../components/ui/profileSection/Address';
import AddCard from '../components/ui/profileSection/AddCard';
import PaymentCard from '../components/ui/profileSection/PaymentCard';
import PaymentMethods from '../components/ui/profileSection/PaymentMethods';
import CouponsList from '../components/ui/profileSection/CouponsList';
import Post from '../components/ui/profileSection/usersContent/Post';
import Followers from '../components/ui/profileSection/usersContent/Followers';
import Following from '../components/ui/profileSection/usersContent/Following';
import FollowRequest from '../components/ui/profileSection/usersContent/FollowRequest';
import RewardsHistory from '../components/ui/profileSection/RewardsHistory';
import PostHeader from '../components/ui/atoms/PostHeader';
import CreatePost from '../components/ui/profileSection/usersContent/CreatePost';
import AllAddress from '../components/ui/profileSection/AllAddress';
import PostContent from '../components/ui/atoms/PostContent';
import Poll from '../components/ui/FeedSection/Poll';
// import RazorPay from '../PaymentGateWay/RazorPay';
import PopulerProducts from '../components/ui/CustomerHomePage/PopulerProducts';
import PopulerProductsDetailsScreen from '../components/ui/CustomerHomePage/PopulerProductsDetailsScreen';
import CheckOutTopTabBar from '../components/CheckOutTopTabBar';
import ReviewOrder from '../components/ui/CustomerHomePage/ReviewOrder';
import ConfirmedOrder from '../components/ui/OrderPage/ConfirmedOrder';
import ReturnOrder from '../components/ui/OrderPage/ReturnOrder';
import BrandYouWillLiked from '../components/ui/CustomerHomePage/BrandYouWillLiked';
import ProductsForYou from '../components/ui/CustomerHomePage/ProductsForYou';

const TopTab = createMaterialTopTabNavigator();

const AuthNavigator = () => {   

  const Stack = createNativeStackNavigator()

  return (

    <NavigationContainer>

      <Stack.Navigator initialRouteName='Role' >

        <Stack.Screen name='Role' component={Role} options={{ headerShown: false }} />
        <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />
        <Stack.Screen name='onBoard' component={OnboardingScreen} options={{ headerShown: false }}
        //  options={{
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

        <Stack.Screen name="tabBar" component={CustomerBottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name='AccountDetails' component={AccountDetails} options={{ headerShown: false }} />
        <Stack.Screen name="Address" component={Address} options={{ headerShown: false }} />
        <Stack.Screen name="AddCard" component={AddCard} options={{ headerShown: false }} />
        <Stack.Screen name="PaymentCard" component={PaymentCard} options={{ headerShown: false }} />
        <Stack.Screen name="AllAddress" component={AllAddress} options={{ headerShown: false }} />

        <Stack.Screen name="PaymentMethods" component={PaymentMethods} options={{ headerShown: false }} />
        <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} />
        <Stack.Screen name="CreatePost" component={CreatePost} options={{ headerShown: false }} />
        <Stack.Screen name="Followers" component={Followers} options={{ headerShown: false }} />
        <Stack.Screen name="Following" component={Following} options={{ headerShown: false }} />
        <Stack.Screen name="FollowRequest" component={FollowRequest} options={{ headerShown: false }} />
        <Stack.Screen name="RewardsHistory" component={RewardsHistory} options={{ headerShown: false }} />
        <Stack.Screen name="PostHeader" component={PostHeader} options={{ headerShown: false }} />
        <Stack.Screen name='ChangePassword' component={ChangePassword} options={{ headerShown: false }} />
        <Stack.Screen name="CouponsList" component={CouponsList} options={{ headerShown: false }} />
        <Stack.Screen name="PrivacyAndPolicy" component={PrivacyAndPolicy} options={{ headerShown: false }} />
        <Stack.Screen name="TemsAndCondition" component={TemsAndCondition} options={{ headerShown: false }} />
        <Stack.Screen name='HelpsAndSupports' component={HelpsAndSupports} options={{ headerShown: false }} />
        <Stack.Screen name='FAQs' component={FAQs} options={{ headerShown: false }} />
        <Stack.Screen name='PostContent' component={PostContent} options={{ headerShown: false }} />
        <Stack.Screen name='Poll' component={Poll} options={{ headerShown: false }} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='PopulerProducts' component={PopulerProducts} options={{ headerShown: false }} />
        <Stack.Screen name='PopulerProductsDetailsScreen' component={PopulerProductsDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name='ReviewOrder' component={ReviewOrder} options={{ headerShown: false }} />
        <Stack.Screen name='BrandYouWillLiked' component={BrandYouWillLiked} options={{ headerShown: false }} />
        <Stack.Screen name='ProductsForYou' component={ProductsForYou} options={{ headerShown: false }} />

        {/* topTab bar */}
        <Stack.Screen name='CheckOutOrderTab' component={CheckOutOrderTab} options={{ headerShown: false }} />
        <Stack.Screen name='AboutOrderTab' component={AboutOrderTab} options={{ headerShown: false }} />


      </Stack.Navigator>


    </NavigationContainer>


  )

}



const CustomerBottomTabNavigator = () => {
  const Tab = createBottomTabNavigator()

  return (

    // <NavigationContainer tabBarActiveIconColor='blue'>
    // <StatusBar backgroundColor='white' barStyle='dark-content' />

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
      <Tab.Screen name="Orders" component={AboutOrderTab}
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
    // </NavigationContainer>


  )


}


const PageNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (

    // <NavigationContainer>
    <Stack.Navigator initialRouteName='Profile'>

      <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="PaymentMethods" component={PaymentMethods} options={{ headerShown: false }} />

      <Stack.Screen name="ForgotPassword" component={ForgetPassword} options={{ headerShown: false }} />
      <Stack.Screen name="Address" component={Address} options={{ headerShown: false }} />
      <Stack.Screen name="AddCard" component={AddCard} options={{ headerShown: false }} />
      <Stack.Screen name="Language" component={Language} options={{ headerShown: false }} />
      <Stack.Screen name="PaymentCard" component={PaymentCard} options={{ headerShown: false }} />

      {/* <Stack.Screen name="Post" component={Post} options={{ headerShown: false }} /> */}




    </Stack.Navigator>

    // </NavigationContainer>

  )
}

const CheckOutOrderTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} >

      <TopTab.Navigator style={{
        backgroundColor: 'white'
      }} tabBar={props => <CheckOutTopTabBar {...props} />} >
        <TopTab.Screen name="Shipping" component={AllAddress} />
        <TopTab.Screen name="Payment" component={PaymentMethods} />
        <TopTab.Screen name='Review' component={ReviewOrder} />
      </TopTab.Navigator>
    </View>
  );
};

const AboutOrderTab = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }} >

      <View style={styles.header}>
        <MaterialIcons name='keyboard-backspace' color='black' size={25} style={{ left: 10, lineHeight: 60 }} onPress={() => navigation.goBack()} />
        <Text style={styles.headerTitle}>Orders</Text>
      </View>

      <TopTab.Navigator style={{
        backgroundColor: 'white'
      }} tabBar={props => <CheckOutTopTabBar {...props} />} >
        <TopTab.Screen name="ConfirmOrder" component={ConfirmedOrder} />
        <TopTab.Screen name="ReturnedOrder" component={ReturnOrder} />
      </TopTab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },

  headerTitle: {
    flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, color: 'black', right: 10
  },
})

// export default CustomerBottomTabNavigator
export default AuthNavigator
// export default PageNavigator