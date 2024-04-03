/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './screens/customers/Home';
import ShopNavigator from './navigation/ShopNavigator';
import SplashScreen from 'react-native-splash-screen';


function App() {

  useEffect(()=>{
    if(Platform.OS === 'android'){

      SplashScreen.hide();
    }
  },[])
  

  return (

    
     <ShopNavigator/>
    
  );
}

const styles = StyleSheet.create({

});

export default App;
