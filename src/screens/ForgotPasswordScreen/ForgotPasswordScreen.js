import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React,{useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomBotton from '../../components/CustomBotton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation, validatePathConfig } from '@react-navigation/native';
import {useForm} from 'react-hook-form';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icons3 from 'react-native-vector-icons/MaterialIcons'

//const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&`*+/=?^_`{|}^-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const EMAIL_REGEX = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/

const ForgotPasswordScreen = () => {

  const {control, handleSubmit} = useForm();

    const navigation = useNavigation();

    const onSendPressed = (data) => {
      const doUserPasswordReset = async function () {
        // Note that this value come from state variables linked to your text input
        const emailValue = data;
        return await Parse.User.requestPasswordReset(emailValue)
          .then(() => {
            // logIn returns the corresponding ParseUser object
            Alert.alert(
              'Success!',
              `Please check ${email} to proceed with password reset.`,
            );
            return true;
          })
          .catch((error) => {
            // Error can be caused by lack of Internet connection
            Alert.alert('Error!', error.message);
            return false;
          });
      };

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
      
      {/* <Icons2 name="email" size={30}  style={styles.icon}/> */}
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
    icon:{
      color:'black',
      alignSelf:'flex-start'
    }
})

export default ForgotPasswordScreen