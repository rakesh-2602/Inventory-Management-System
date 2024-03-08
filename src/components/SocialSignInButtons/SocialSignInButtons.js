import { View, Text } from 'react-native'
import React from 'react'
import CustomBotton from '../CustomBotton'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '802756772030-voucojpf6r4g1ji80pe46879jvfn2305.apps.googleusercontent.com',
});

const SocialSignInButtons = ({navigation}) => {
  const onGoogleButtonPress = async () => {
    try {
     await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});

      const {idToken} = await GoogleSignin.signIn();

      const googleCredential = auth.GoogleAuthProvider.credential(idToken);

      await auth().signInWithCredential(googleCredential);

      const user = auth().currentUser;
      if (user) {
        navigation.replace('HomeScreen');
      } else {
        console.error('Authentication failed');
      }
    }
    catch (error) {
  console.error('Google Sign-In Error:', error);
}

  };

  return (
    <>
      <CustomBotton
        text="Sign in with Google"
        onPress={onGoogleButtonPress}
        bgcolor="#FAE9EA"
        fgcolor="#DD4D44"
      />
    </>
  );
};

export default SocialSignInButtons