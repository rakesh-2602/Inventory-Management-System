import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomBotton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const NewPasswordScreen = () => {

  const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onSubmitPressed = (data) => {
      console.warn(data);

      navigation.navigate('HomeScreen')
    }

    const onSignInPressed = () => {
      //console.warn('on sign-in pressed')

      navigation.navigate('SignIn');
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
      
        <CustomInput placeholder='Code' 
            name='code'
            control={control}
            rules={{required: 'Code is required'}}
        />

      <CustomInput placeholder='Enter your new password' 
          name='password'
          control={control}
          rules={{required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password should be atleast 6 character long',
                  },
                }}
      />

      <CustomBotton text="Submit" 
        onPress={handleSubmit(onSubmitPressed)} 
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

export default NewPasswordScreen