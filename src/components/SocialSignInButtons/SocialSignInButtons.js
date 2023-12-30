import { View, Text } from 'react-native'
import React from 'react'
import CustomBotton from '../CustomBotton'

const SocialSignInButtons = () => {

    const onSignInFacebook = () => {
        console.warn('FaceBook');
      }
  
      const onSignInGoogle = () => {
        console.warn("Google");
      }
      
  return (
    <>
      <CustomBotton text='Sign in with Google' 
        onPress={onSignInGoogle} 
        bgcolor='#FAE9EA'
        fgcolor='#DD4D44'
      />

      <CustomBotton text='Sign in with Facebook' 
      onPress={onSignInFacebook} 
      bgcolor='#FAE9EA'
      fgcolor='#4765A9'
      />
    </>
  )
}

export default SocialSignInButtons