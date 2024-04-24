import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Input = ({ label, error, touched, ...props }) => {

  const [value, setValue] = useState('')

  const Validation = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('First Name is Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Last Name is Required'),

    email: Yup.string()
      .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, ' Email address is not valid')
      .required('Email is Required'),

    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .matches(/(?=.*[0-9])/, 'Password must contain a number.')
      .matches(/(?=.*[a-z])/, 'Password must contain a lowercase letter.')
      .matches(/(?=.*[A-Z])/, 'Password must contain an uppercase letter.')
      .matches(/(?=.*[!@#$%^&*])/, 'Password must contain a non-alphanumeric character.')
      .required('Password is Required'),
  });


  return (
    <View>
      {label && <Text>{props.lable}</Text>}
      <TextInput
        {...props}
      />
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </View>
  )
}

export default Input

const styles = StyleSheet.create({

})