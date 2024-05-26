import { View, Text, StatusBar, StyleSheet, TextInput } from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <>
    <StatusBar></StatusBar>
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.branco}>Cyber<Text style={styles.rosa}>Pass</Text></Text>
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Email:</Text>
        <TextInput textContentType='emailAddress' style={styles.input} placeholder='triplogamer@gmail.com'></TextInput>
      </View>

      <View style={styles.campo}>
        <Text style={styles.label}>Senha:</Text>
        <TextInput secureTextEntry={true} textContentType='password' style={styles.input} placeholder='Senha123'></TextInput>
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%',
    height: '100%'
  },
  header:{
    height: '10%',  
    width: '100%',
    marginTop: 10,
    marginBottom: -10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  rosa:{
    color: '#FF005C',
    fontSize: 25,
    fontWeight: '400'
  },
  branco:{
      color: '#FFF',
      fontSize: 25,
      fontWeight: '300'
  },
  input:{
    width: 300,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF005C'
  },
  campo:{
    display: 'flex'
  },
  label:{
    color: 'white',
    fontSize: 20,
    marginBottom: 5
  }
})

export default Login;