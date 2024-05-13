import { Dimensions, Image, StatusBar, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomeButton from '../atoms/CustomeButton'

import LinearGradient from 'react-native-linear-gradient';


const { width, height } = Dimensions.get('window')

const Login = (props) => {
  return (
    <View style={styles.screen}>
      
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Let's you signin</Text>
          <Image source={require('../../../assets/images/egg.png')} style={styles.ovelImage} />

        </View>
        <Text style={styles.summary}>Welcome back, you have been missed</Text>
      </View>

      <View style={styles.images}>
        <Image source={require("../../../assets/images/Welcome-amico.png")} style={styles.middleImage} />
      </View>

      {/* {console.log(require("../../images/Welcome-amico.png"))} */}

      <TouchableOpacity style={styles.lointBtnContainer}>
        <CustomeButton style={styles.loginBtn} onPress={() => props.navigation.navigate('PhoneLogin')}>Login with Phone Number</CustomeButton>
      </TouchableOpacity>


      <View style={styles.row}>
        <LinearGradient colors={['white', 'blue']}>
          <View style={styles.left}></View>
        </LinearGradient>
        <View>
          <Text style={styles.btnText}> OR LOGIN WITH</Text>
        </View>
        <LinearGradient colors={['red', 'blue']}>
          <View style={styles.right}></View>
        </LinearGradient>

      </View>

      <View style={{ alignItems: 'center' }}>

        <View style={{ width: width * 0.7, flexDirection: 'row', justifyContent: 'space-around', padding: 10, }}>
          <View style={styles.card}>
            <Image source={require('../../../assets/images/facebook.png')} />
          </View>

          <View style={styles.card}>
            <Image source={require('../../../assets/images/google.png')} />
          </View>

          <View style={styles.card}>
            <Image source={require('../../../assets/images/apple-logo.png')} />
          </View>

        </View>
      </View>


      <View style={styles.createPassContainer}>
        <Text onPress={() => { console.log("Don't have an Account?") }}>Don't have an Account? </Text>
        <Text onPress={() => props.navigation.navigate('Signup')} style={{ fontWeight: 'bold', color: 'black', fontSize: 16 }}>Create One</Text>
      </View>

    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginHorizontal: 16
  },

  container: {
    marginVertical: 20
  },

  textContainer: {
    position: 'relative'

  },

  ovelImage: {
    position: 'absolute',
    right: "55%",
    zIndex: 0
  },

  title: {
    // position:'relative',
    fontWeight: 'bold',
    zIndex: 1,
    color: 'black',
    fontSize: 26
  },

  summary: {
    fontSize: 16,
    marginVertical: 5
  },

  middleImage: {
    width,
    height: 400,
    justfyContent: 'center'
  },

  images: {
    // flex: 1,
    // height:height*0.7,
    marginVertical: 10,
    // borderColor: 'black',
    // borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  },

  lointBtnContainer: {
    alignItems: 'center'
  },

  loginBtn: {
    padding: 15,
    height: 50,
    alignItems: 'center',

  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    justifyContent: 'center'
  },

  left: {
    borderColor: 'black',
    borderWidth: 0.9,
    width: 100

  },

  btnText: {
    marginHorizontal: 10
  },

  right: {
    borderColor: 'black',
    borderWidth: 0.9,
    width: 100

  },

  card: {
    padding: 16,
    marginVertical: 5,
    borderColor: '#7D8488',
    borderWidth: 1,
    borderRadius: 28,
    justifyContent: "space-around"

  },

  createPassContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 15,
    alignItems: 'center'
  },



})