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

import {thunk} from 'redux-thunk' 
import { createStore,combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'

import authReducer from './store/Reducers/Auth'
import { RoleProvider } from './components/UI/atoms/RoleSelector.js';



const rootReducer = combineReducers({
  auth: authReducer

})


const store = createStore(rootReducer, applyMiddleware(thunk));


function App() {

  useEffect(()=>{
    if(Platform.OS === 'android'){

      SplashScreen.hide();
    }
  },[])
  

  return (
<RoleProvider>
    <Provider store={store}>
    
     <ShopNavigator/>

     </Provider>
     </RoleProvider>
  );
}

const styles = StyleSheet.create({

});

export default App;
