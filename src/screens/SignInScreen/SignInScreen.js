import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native';
import React,{useState} from 'react';
import Logo from '../../../assets/images/Logo_1.png';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomBotton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';

const SignInScreen = () => {

    const {height} = useWindowDimensions();
    const navigation = useNavigation();

    const {control, handleSubmit, formState: {errors},} = useForm();

    const onSignInPressed = (data) => {
      console.log(data)
      //console.warn("Sign in");
      //validation

      navigation.navigate('HomeScreen')
    }

    const onForgotPasswordPressed = () => {
      //console.warn("Forgot Password");
      navigation.navigate("ForgotPassword");
    }

    const onSignUpPressed = () => {
      console.warn('on sign-up pressed')
      navigation.navigate('SignUp');
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source={Logo} style={[styles.logo, {height: height * 0.3}]} resizeMode='contain' />

      <CustomInput
        name='username' 
        placeholder='Username'
        control={control}
        rules={{required: 'Username is required', minLength: {value: 5, message: 'Username should be atleast 5 character long',
        },
         maxLength: {value: 25, message: 'Username can be maximum 25 character long',
        },
      }}
      />

      <CustomInput 
        name='password'
        placeholder='Password'
        secureTextEntry={true}
        control={control}
        rules={{required: 'Password is required', minLength: {value: 6, message: 'Password should be minimum 6 characters long'}}}
      />

      <CustomBotton text='Sign In' 
      onPress={handleSubmit(onSignInPressed)} 
      />

      <CustomBotton text='Forgot Password' 
      onPress={onForgotPasswordPressed} 
      type='TERTIARY'
      />

      <SocialSignInButtons />

      <CustomBotton text="Don't have an account? Create one" 
        onPress={onSignUpPressed} 
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
    logo:{
        width: '70%',
        maxWidth: 300,
        maxHeight: 200,
    },
})

export default SignInScreen