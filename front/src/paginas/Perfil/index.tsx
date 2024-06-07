import { View, Text, StatusBar, StyleSheet, TextInput, Image, ImageBackground} from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { Link, useNavigation } from '@react-navigation/native';
import Cadastro from '../Cadastro';

const Perfil = ({navigation}) => {
  return (
    <>
    <StatusBar></StatusBar>
    <View style={styles.container}>
      <ImageBackground source={require('../../../assets/background.png')} resizeMode='cover' style={{alignItems: 'center', width: '100%', height: '100%'}}>

      <View style={styles.header}>
        <Text style={styles.branco}>Cyber<Text style={styles.rosa}>Pass</Text></Text>
      </View>

      <View style={styles.cardimagem}>
        <Image style={styles.imagem} source={require('../../../assets/login.png')}></Image>
        <Text style={styles.branco2}>Entre com a sua conta</Text>
      </View>

        <View style={{marginTop: 50, display: 'flex', gap: 10}}>
          <View style={styles.campo}>
            <Text style={styles.label}>Email:</Text>
            <TextInput textContentType='emailAddress' style={styles.input} placeholder='triplogamer@gmail.com'></TextInput>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Senha:</Text>
            <TextInput secureTextEntry={true} textContentType='password' style={styles.input} placeholder='Senha123'></TextInput>
            
            <View style={styles.recuperar}>
              <View>
                <Text style={styles.branco3}>Esqueceu a sua senha?</Text>
              </View>
              <View>
                <Text style={styles.rosa2}>Recuperar!</Text>
              </View>
            </View>

            <View style={styles.botao}>
              <Button style={styles.botao2} textColor='white' labelStyle={{fontSize: 18}}>Perfil</Button>
            </View>

            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
              <Text style={styles.branco4}>Ainda não possui cadastro?</Text>
              <Text style={styles.rosa3} onPress={() => navigation.navigate("Cadastro")}>Cadastre-se</Text>
            </View>
          </View>
        </View>
        </ImageBackground>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  botao:{
    marginTop: 40,
  },
  botao2:{
    backgroundColor: '#ff005c',
    color: 'white',
    height: 50,
    display: 'flex',
    verticalAlign: 'middle',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  },
  cardimagem:{
    display: 'flex',
    alignItems:'center',
    width: 250,
    height: 250
  },
  recuperar:{
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'row',
    gap: 2
  },
  imagem:{
    width: '100%',
    height: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF005C'
  },
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
  rosa2:{
    color: '#FF005C',
    fontSize: 15,
    fontWeight: '300',
  },
  rosa3:{
    color: '#FF005C',
    fontSize: 18,
    fontWeight: '300',
  },
  branco:{
      color: '#FFF',
      fontSize: 25,
      fontWeight: '300'
  },
  branco2:{
    color: '#FFF',
    fontSize: 25,
    fontWeight: '400'
},
branco3:{
  color: '#FFF',
  fontSize: 15,
  fontWeight: '300',
},
branco4:{
  color: '#FFF',
  fontSize: 18,
  fontWeight: '300',
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

export default Perfil;