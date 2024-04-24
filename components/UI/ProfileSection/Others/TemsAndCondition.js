import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TemsAndCondition = () => {
  return (
    <View style={styles.screen}>

      <View style={styles.header}>

        <Text style={{ flex: 1, lineHeight: 60, textAlign: 'center', fontSize: 20, color: 'black' }}>Terms and conditions</Text>

      </View>

      <View style={{padding:10}}>

        <Text style={styles.text}>

          A Terms and Conditions agreement acts as a legal contract between you (EasyShop) and the user.{'\n'}{'\n'}

          It's where you maintain your rights to exclude users from your app in the event that they abuse your website/app, set out the rules for using your service and note other important details and disclaimers.
{'\n'}{'\n'}
          Having a Terms and Conditions agreement is completely optional. No laws require you to have one. Not even the super-strict and wide-reaching General Data Protection Regulation (GDPR).
          {'\n'}{'\n'}
          Your Terms and Conditions agreement will be uniquely yours. While some clauses are standard and commonly seen in pretty much every Terms and Conditions agreement, it's up to you to set the rules and guidelines that the user must agree to.
          {'\n'}{'\n'}
          Terms and Conditions agreements are also known as Terms of Service or Terms of Use agreements. These terms are interchangeable, practically speaking. More rarely, it may be called something like an End User Services Agreement (EUSA).{'\n'}{'\n'}</Text>
      </View>
    </View>
  )
}

export default TemsAndCondition

const styles = StyleSheet.create({

  screen: {
    flex: 1,
    marginHorizontal: 16
  },


  header: {
    height: 60,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  text: {
    textAlign: 'justify',
    fontSize: 16
  }
})