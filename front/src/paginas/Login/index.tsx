import { View, Text, StatusBar, StyleSheet, TextInput, Image, ImageBackground, Alert} from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper'
import { Link, useNavigation, useRoute } from '@react-navigation/native';
import Cadastro from '../Cadastro';
import axios from 'axios';
import { UserData } from '../../interface/UserData';
import { API_URL } from '../../../api';

const Login = ({navigation}) => {
  
    const [userData, setUserData] = useState([]);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() => {
      const fetchData = async () => {
        try {
            const response = await axios.get(API_URL + '/users');
            setUserData(response.data);
        } catch (error: any) {
            console.error('Error:', error);
        }
    };

    fetchData();
    }, []);
  
  if (!userData) {
    return (
      <View>
        <Text>Carregando...</Text>
      </View>
    );
  }

  const handleSubmit = () => {
    const filteredUser = userData.filter(user => 
      user.email.toLowerCase() === (username.toLowerCase())
  );
    const filteredPassword = userData.filter(user =>
      user.password.toLowerCase() === (password.toLowerCase())
  );

  if (filteredUser.length > 0 && filteredPassword.length > 0)
    console.log("LOGIN CORRETO");
  else
    console.log("LOGIN INCORRETO");
};

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
            <TextInput 
              textContentType='emailAddress' 
              style={styles.input} 
              placeholder='Digite seu e-mail'
              value={username}
              onChangeText={setUsername}
            >
            </TextInput>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label} id='senha'>Senha:</Text>
            <TextInput 
              secureTextEntry={true} 
              textContentType='password'
              style={styles.input} 
              placeholder='Digite sua senha'
              value={password}
              onChangeText={setPassword}
            >
            </TextInput>
            
            <View style={styles.recuperar}>
              <View>
                <Text style={styles.branco3}>Esqueceu a sua senha?</Text>
              </View>
              <View>
                <Text style={styles.rosa2}>Recuperar!</Text>
              </View>
            </View>

            <View style={styles.botao}>
              <Button onPress={handleSubmit} style={styles.botao2} textColor='white' labelStyle={{fontSize: 18}}>Login</Button>
            </View>

            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 10}}>
              <Text style={styles.branco4}>Ainda não possui cadastro?</Text>
              <Text style={styles.rosa3} onPress={() => navigation.navigate("Cadastro", { login: username, password: password})}>Cadastre-se</Text>
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

export default Login;

function useAuth(): { login: any; } {
  throw new Error('Function not implemented.');
}
