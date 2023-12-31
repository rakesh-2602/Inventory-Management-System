import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomBotton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation, validatePathConfig } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

//const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}^-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/

const ForgotPasswordScreen = () => {

  const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onSendPressed = (data) => {
      console.warn(data);

      navigation.navigate('NewPassword');
    }

    const onSignInPressed = () => {
      //console.warn('on sign-in pressed')

      navigation.navigate('SignIn');
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
      
      
      <Text style={styles.label}>Email</Text>
      <CustomInput placeholder='Email' 
           name='email'
           control={control}
           rules={{required: 'Email is required',pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}
           }}
      />

      <CustomBotton text="Send" 
        onPress={handleSubmit(onSendPressed)} 
      />

        <CustomBotton text="Back to sign in" 
            onPress={onSignInPressed} 
            type='TERTIARY'
        />
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    root:{
        alignItems: 'center',
        padding: 20,
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#051C60',
        margin: 10,
        padding: 50,
    },
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color: '#FDB075',
    },
    label: {
      alignSelf: 'stretch',
      color: 'black'
    },
})

export default ForgotPasswordScreen