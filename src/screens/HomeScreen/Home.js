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
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});

 export default index;

// /* =====================New Program====================== */

// import React from 'react'
// import "./home.scss"

// const Home = () => {
//   return (
//     <div className='home'>Home</div>
//   )
// }

// export default Home
