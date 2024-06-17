import { View, Text, StatusBar, StyleSheet, TextInput, Image, ScrollView, ImageBackground} from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper'
import { TextInputMask } from 'react-native-masked-text'

const Cadastro = ({navigation}) => {
  const [cpf, setCpf] = useState('');
  const [data, setData] = useState('');

  return (
    <>
    <StatusBar></StatusBar>
    <ScrollView>
      <View style={styles.container}>
        <ImageBackground source={require('../../../assets/background.png')} resizeMode='cover' style={{display: 'flex', alignItems: 'center', width: '100%'}}>
          <View style={styles.header}>
            <Text style={styles.branco}>Cyber<Text style={styles.rosa}>Pass</Text></Text>
          </View>

          <View style={styles.cardimagem}>
            <Image style={styles.imagem} source={require('../../../assets/cadastro.png')}></Image>
            <Text style={styles.branco2}>Faça parte da história</Text>
          </View>

            <View style={{marginTop: 50, display: 'flex', gap: 10}}>
              <View style={styles.campo2}>
                <View >
                  <Text style={styles.label}>Nome:</Text>
                  <TextInput textContentType='emailAddress' style={styles.inputmetade} placeholder='Marcelo'></TextInput>
                </View>

                <View>
                  <Text style={styles.label}>Sobrenome:</Text>
                  <TextInput textContentType='emailAddress' style={styles.inputmetade} placeholder='Batista'></TextInput>
                </View>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Email:</Text>
                <TextInput textContentType='emailAddress' style={styles.input} placeholder='triplogamer@gmail.com'></TextInput>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>CPF:</Text>
                <TextInputMask 
                style={styles.input}
                type={'cpf'}
                value={cpf}
                onChangeText={text => setCpf(text)} 
                placeholder='111.111.111-11'/>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Data de Nascimento:</Text>
                <TextInputMask 
                style={styles.input}
                type={'datetime'}
                value={data}
                onChangeText={text => setData(text)}
                maxLength={10}
                placeholder='11/11/2011'/>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Senha:</Text>
                <TextInput secureTextEntry={true} textContentType='password' style={styles.input} placeholder='Senha123'></TextInput>
              </View>

              <View style={styles.campo}>
                <Text style={styles.label}>Confirmação da senha:</Text>
                <TextInput secureTextEntry={true} textContentType='password' style={styles.input} placeholder='Senha123'></TextInput>
              </View>
                            
                <View style={styles.botao}>
                  <Button style={styles.botao2} textColor='white' labelStyle={{fontSize: 18}}>Cadastro</Button>
                </View>

                <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 160}}>
                  <Text style={styles.branco4}>Já possui uma conta?</Text>
                  <Text style={styles.rosa3} onPress={() => navigation.navigate("Login")}>Faça login</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  metade:{
    width: '50%'
  },
  campo2:{
    display: 'flex',
    flexDirection: 'row',
    gap: 20
  },
  botao:{
    marginTop: 30,
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
    width: 320,
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF005C'
  },
  inputmetade:{
    width: 150,
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
    fontSize: 18,
    marginBottom: 5
  }
})

export default Cadastro;