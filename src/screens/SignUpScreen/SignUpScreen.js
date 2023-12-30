import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomBotton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

//const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}^-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/

const SignUpScreen = () => {

  const {control, handleSubmit, watch} = useForm();

    const pwd = watch('password')
    const navigation = useNavigation();

    const onRegisterPressed = () => {
      //console.warn("Registered");

      navigation.navigate('ConfirmEmail');
    }

    const onSignInPressed = () => {
      //console.warn('on sign-in pressed')

      navigation.navigate('SignIn');
    }

    const onTermsOfUsePressed = () => {
        console.warn('Terms and conditions')
    }

    const onPrivacyPolicyPressed = () => {
        console.warn('Privacy policy')
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
      
      <CustomInput placeholder='Username' 
         name="username"
         control={control}
         rules={{required: 'Username is required', minLength: {value: 5, message: 'Username should be atleast 5 character long',
        },
         maxLength: {value: 25, message: 'Username can be maximum 25 character long',
        },
      }}
      />

    <CustomInput placeholder='Email' 
      name="email"
      control={control}
      rules={{required: 'Email is required',pattern: {value: EMAIL_REGEX, message: 'Email is invalid'}}}
    />

      <CustomInput placeholder='Password' 
      name="password"
      control={control}
      secureTextEntry 
      rules={{required: 'Password is required', 
            minLength: {value: 6, message: 'Password should be atleast 6 character long',
        },
      }}
      />

    <CustomInput placeholder='Repeat Password' 
      name="password-repeat"
      control={control}
      secureTextEntry 
      rules={{
        validate: value => value === pwd || 'Password do not match', 
      }}
      />

      <CustomBotton text="Register" 
        onPress={handleSubmit(onRegisterPressed)} 
      />

      <Text style={styles.text}>
        By registering, you confirm that you accept our{' '} 
        <Text style={styles.link} onPress={onTermsOfUsePressed}> Terms of use</Text> and{' '} 
        <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy.</Text>
      </Text>

      <SocialSignInButtons />

        <CustomBotton text="Have an account? Sign in" 
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

export default SignUpScreen