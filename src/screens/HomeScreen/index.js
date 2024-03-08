import {View, Text, StyleSheet, Pressable} from 'react-native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {StackActions, useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const index = () => {
  const navigation = useNavigation();

  signOutUser = async () => {
    try {
      await auth().signOut();
      navigation.dispatch(StackActions.popToTop());
    } catch (e) {
      console.log(e);
    }
  };

  const CustomBotton = ({
    onPress,
    text,
    type = 'PRIMARY',
    bgcolor,
    fgcolor,
  }) => {
    return (
      <Pressable
        onPress={onPress}
        style={[
          styles.container,
          styles[`container_${type}`],
          bgcolor ? {backgroundColor: bgcolor} : {},
        ]}>
        <Text
          style={[
            styles.text,
            styles[`text_${type}`],
            fgcolor ? {color: fgcolor} : {},
          ]}>
          {text}
        </Text>
      </Pressable>
    );
  };

  const {handleSubmit} = useForm();

  return (
    <View>
      <Text style={{fontSize: 24, alignSelf: 'center'}}>
        WELCOME TO INVENTORY MANAGEMENT
      </Text>

      <CustomBotton
        text="Log Out"
        onPress={handleSubmit(signOutUser)}></CustomBotton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 15,
    marginVertical: 100,
    marginHorizontal: 100,
    alignItems: 'center',
    borderRadius: 50,
  },

  container_PRIMARY: {
    alignContent: 'center',
    backgroundColor: 'orange',
  },

  // container_SECONDARY:{
  //   backgroundColor: '#F9FBFC',
  //   borderColor: '#3B71F3',
  //   borderWidth: 2
  // },

  // container_TERTIARY:{},

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  // text_TERTIARY:{
  //   color: 'gray',
  // },

  // text_SECONDARY:{
  //   color: 'blue',
  // }
});

export default index;
