/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Home from './src/screens/customers/Home.js';
import ShopNavigator from './src/navigation/ShopNavigator.js';
import SplashScreen from 'react-native-splash-screen';

import { thunk } from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import authReducer from './src/utiles/localStorage/store/reducers/Auth.js'
import { RoleProvider } from './src/components/ui/atoms/RoleSelector.js';



const rootReducer = combineReducers({
  auth: authReducer

})


const store = createStore(rootReducer, applyMiddleware(thunk));


function App() {

  useEffect(() => {
    if (Platform.OS === 'android') {

      SplashScreen.hide();
    }
  }, [])


  return (
    <RoleProvider>
      <Provider store={store}>

        <ShopNavigator />

      </Provider>
    </RoleProvider>
  );
}

const styles = StyleSheet.create({

});

export default App;
