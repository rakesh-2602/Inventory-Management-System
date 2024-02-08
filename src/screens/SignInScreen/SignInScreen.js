import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Logo from '../../../assets/images/grocery.jpg';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomBotton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import auth from '@react-native-firebase/auth';

const SignInScreen = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSignInPressed = async data => {
    await auth()
      .signInWithEmailAndPassword(data.username, data.password)
      .then(() => {
        console.log('User account created & signed in!');
        navigation.replace('HomeScreen');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };

  // const onSignInPressed = async () => {
  //   try {
  //     const formData = await handleSubmit(data => data)();
  //     const { username, password } = formData;
  //     await auth()
  //       .signInWithEmailAndPassword(username, password)
  //       .then(() => {
  //         console.log('User account created & signed in!');
  //         navigation.replace('HomeScreen');
  //       })
  //       .catch(error => {
  //         if (error.code === 'auth/email-already-in-use') {
  //           console.log('That email address is already in use!');
  //         }
  //         if (error.code === 'auth/invalid-email') {
  //           console.log('That email address is invalid!');
  //         }
  //         console.error(error);
  //       });
  //   } catch (error) {
  //     console.error('Error signing in:', error.message);
  //   }
  // };

  const onForgotPasswordPressed = () => {
    //console.warn("Forgot Password");
    navigation.navigate('ForgotPassword');
  };

  const onSignUpPressed = () => {
    console.warn('on sign-up pressed');
    navigation.navigate('SignUp');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />

        <Text style={styles.label}>Username</Text>
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: 'Username is required',
            minLength: {
              value: 5,
              message: 'Username should be atleast 5 character long',
            },
            maxLength: {
              value: 50,
              message: 'Username can be maximum 25 character long',
            },
          }}
        />

        <Text style={styles.label}>Password</Text>
        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          control={control}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be minimum 6 characters long',
            },
          }}
        />

        <CustomBotton text="Sign In" onPress={handleSubmit(onSignInPressed)} />

        <CustomBotton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
        />

        <SocialSignInButtons />

        <CustomBotton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200,
    padding: 120,
  },
  label: {
    alignSelf: 'stretch',
    color: 'black',
  },
});

export default SignInScreen;
