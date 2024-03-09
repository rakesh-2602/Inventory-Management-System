import { View, Text, TextInput, StyleSheet,secureTextEntry } from 'react-native'
import React from 'react'
import { Controller } from 'react-hook-form'


const CustomInput = ({control, name, rules = {}, placeholder, secureTextEntry}) => {
  return (
  
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
      <>
        <View style={[styles.container, {borderColor: error ? 'red' : '#e8e8e8'}]}>
      <TextInput 
      value={value} 
      onChangeText={onChange} 
      onBlur={onBlur} 
      placeholder={placeholder} 
      style={[styles.input, {}]}
      secureTextEntry={secureTextEntry}
      />
      </View> 
      {error && (
      <Text style={{color: 'red', alignSelf: 'stretch'}}>{error.message || 'Error'}</Text>
      )}
      </>
      )}
    />
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '80%',
        borderColor: '#e8e8e8',
        borderWidth: 8,
        borderRadius: 50,
        marginLeft:90,
        marginTop:-55,
        paddingHorizontal: 10,
        marginVertical: 20,
    },
    input: {
    },
})

export default CustomInput