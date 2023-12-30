import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomBotton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {

  const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onConfirmPressed = (data) => {
      console.warn(data);

      navigation.navigate('HomeScreen');
    }

    const onSignInPressed = () => {
      //console.warn('on sign-in pressed')

      navigation.navigate('SignIn');
    }

    const onResendPressed = () => {
        console.warn('Resent')
      }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>


      <CustomInput placeholder='Enter your confirmation code' 
          name='code'
          control={control} 
          rules={{required: 'Confirmation code is required'}}
      />

      <CustomBotton text="Confirm" 
        onPress={handleSubmit(onConfirmPressed)} 
      />

        <CustomBotton text="Resend code" 
            onPress={onResendPressed} 
            type='SECONDARY'
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
    },
    text:{
        color: 'gray',
        marginVertical: 10,
    },
    link:{
        color: '#FDB075',
    },
})

export default ConfirmEmailScreen