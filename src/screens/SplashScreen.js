import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {StackActions, useNavigation} from '@react-navigation/native';

export default function SplashSccreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      auth().onAuthStateChanged(user => {
        const routeName = user !== null ? 'HomeScreen' : 'SignIn';
        navigation.dispatch(StackActions.replace(routeName));
      });
    }, 3000);
    return () => {};
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Loading...</Text>
    </View>
  );
}
