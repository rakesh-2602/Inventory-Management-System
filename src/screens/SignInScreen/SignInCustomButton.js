import { View, Text, StyleSheet,Pressable } from 'react-native'
import React from 'react'

const CustomBotton = ({onPress, text, type='PRIMARY', bgcolor, fgcolor}) => {
  return (
    <Pressable 
    onPress={onPress} 
    style={[styles.container, 
    styles[`container_${type}`],
    bgcolor ? {backgroundColor: bgcolor} : {},
    ]}>
      <Text 
      style={[styles.text, 
      styles[`text_${type}`],
      fgcolor ? {color: fgcolor} : {},
      ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container:{
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 50,
        marginTop: 15,
    },

    container_PRIMARY:{
      width: '50%',
      backgroundColor: 'orange',
      marginTop: 10,
    },

    container_SECONDARY:{
      backgroundColor: '#F9FBFC',
      borderColor: '#3B71F3',
      borderWidth: 2,
    },

    container_TERTIARY:{
      marginTop: 5,
    },

    text:{
        fontWeight: 'bold',
        color: 'white',
    },

    text_TERTIARY:{
      color: 'gray',
    },

    text_SECONDARY:{
      color: 'blue',
    }
})

export default CustomBotton