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

  const {control, handleSubmit,watch} = useForm();

  const navigation = useNavigation();
  const email  = watch('email')


    const [message, setMessage] = useState('');
    console.log(email)
    const sendPasswordResetEmail = async () => {
      try {
        await auth().sendPasswordResetEmail(email);
        setMessage('Password reset email sent. Check your email inbox.');
      } catch (error) {
        setMessage(error.message);
      }
    };

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
        <CustomInput
          placeholder="Email"
          name="email"
          control={control}
          rules={{
            required: 'Email is required',
            pattern: {value: EMAIL_REGEX, message: 'Email is invalid'},
          }}
        />

        <CustomBotton
          text="Send"
          onPress={handleSubmit(sendPasswordResetEmail)}
        />

        <CustomBotton
          text="Back to sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
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