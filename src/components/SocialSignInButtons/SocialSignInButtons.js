import { View, Text } from 'react-native'
import React from 'react'
import CustomBotton from '../CustomBotton'
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '802756772030-voucojpf6r4g1ji80pe46879jvfn2305.apps.googleusercontent.com',
});

const SocialSignInButtons = () => {

async function onGoogleButtonPress() {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });
    // Get the users ID token
    const {idToken} = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    auth().signInWithCredential(googleCredential);
  } catch (err) {
    console.log(err);
  }
}
      
  return (
    <>
      <CustomBotton text='Sign in with Google' 
        onPress={onGoogleButtonPress} 
        bgcolor='#FAE9EA'
        fgcolor='#DD4D44'
      />

    </>
  );
}

export default SocialSignInButtons