import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomBotton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {useForm} from 'react-hook-form';

//const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}^-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;

const SignUpScreen = () => {
  const {control, handleSubmit, watch, setValue} = useForm();
  const [message, setMessage] = useState('');

  // Watch values from the form
  const email = watch('email', '');
  const password = watch('password', '');
  

  const navigation = useNavigation();
   console.log('Email:', email);
   console.log('Password:', password);
  
  

  const onRegisterPressed = async () => {
    try {
      // Check if email and password are not empty or null
      if (!email || !password) {
        console.error('Email or password is empty or null.');
        return;
      }

      const isUserCreated = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(isUserCreated);
      if (isUserCreated) {
        navigation.replace('HomeScreen');
      } else {
        console.error('Registration failed');
      }
    } catch (err) {
      console.log(err);
      setMessage(err.message);
    }
  };


  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onTermsOfUsePressed = () => {
    console.warn('Terms and conditions');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn('Privacy policy');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <Text style={styles.label}>Username</Text>
        <CustomInput
          placeholder="Username"
          name="username"
          control={control}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 5,
              message: 'Username should be at least 5 characters long',
            },
            maxLength: {
              value: 25,
              message: 'Username can be maximum 25 characters long',
            },
          }}
        />
        <Text style={styles.label}>Email</Text>
        <CustomInput
          placeholder="Email"
          name="email"
         
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />
        <Text style={styles.label}>Password</Text>
        <CustomInput
          placeholder="Password"
          name="password"
          control={control}
          secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be at least 6 characters long',
            },
          }}
        />
        <Text style={styles.label}>Repeat Password</Text>
        <CustomInput
          placeholder="Repeat Password"
          name="password-repeat"
        
          control={control}
          secureTextEntry
          rules={{
            validate: value => value === password || 'Passwords do not match',
          }}
        />

        <CustomBotton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
        />
        <Text>{ message }</Text>
        <Text style={styles.text}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of use
          </Text>{' '}
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy.
          </Text>
        </Text>
        <SocialSignInButtons />
        <CustomBotton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075',
  },
  label: {
    alignSelf: 'stretch',
    color: 'black',
  },
});

export default SignUpScreen;
